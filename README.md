# Biome: Avoidable Anti-Patterns

A collection of rules for [Biome](https://github.com/biomejs/biome) for identifying and avoiding anti-patterns in code.

These rules are largely inspired by online resources and existing plugins for other linters. Though many of the current rules focus on React
Effects, other common anti-patterns are welcome where they can be reasonably detected without introducing too many false positives.

In some ways, this repository is an experiment in capturing anti-patterns that aren't currently ([and may never be](https://github.com/biomejs/biome/discussions/7626)) native
to Biome, with the goal being to provide opinionated machine-readable feedback that helps both humans and AI coding tools avoid common anti-patterns automatically.

## Setup

Install package:

```sh
# NPM
npm install --save-dev @ryanmab/biome-plugin-avoidable-anti-patterns

# Bun
bun add --dev @ryanmab/biome-plugin-avoidable-anti-patterns

# Yarn
yarn add --dev @ryanmab/biome-plugin-avoidable-anti-patterns
```

Add the following rules to Biome's configuration file (`biome.json`):
```json
{
    "plugins": [
        "./node_modules/@ryanmab/biome-plugin-avoidable-anti-patterns/react-effect/noEffectInitialiseState.grit",
        "./node_modules/@ryanmab/biome-plugin-avoidable-anti-patterns/react-effect/noEffectDeriveState.grit",
        "./node_modules/@ryanmab/biome-plugin-avoidable-anti-patterns/react-effect/noEffectChain.grit",
        "./node_modules/@ryanmab/biome-plugin-avoidable-anti-patterns/react-effect/noEffectFetchWithoutCleanup.grit",
        "./node_modules/@ryanmab/biome-plugin-avoidable-anti-patterns/react-effect/noEffectPassStateToParent.grit",
        "./node_modules/@ryanmab/biome-plugin-avoidable-anti-patterns/react-effect/noEffectEventHandler.grit",
        "./node_modules/@ryanmab/biome-plugin-avoidable-anti-patterns/react-effect/noEffectResetState.grit",
        "./node_modules/@ryanmab/biome-plugin-avoidable-anti-patterns/react-effect/noEffectSetStateOnPropChange.grit",
        "./node_modules/@ryanmab/biome-plugin-avoidable-anti-patterns/react-effect/noEffectSyncExternalStore.grit",
        "./node_modules/@ryanmab/biome-plugin-avoidable-anti-patterns/react-effect/noEffectEmpty.grit",
        "./node_modules/@ryanmab/biome-plugin-avoidable-anti-patterns/react-effect/noEffectManageParent.grit"
    ]
}
```

## Rules

> [!WARNING]
> The ways in which anti-patterns can develop are practically endless, and this plugin is by no means exhaustive.
>
> If you spot any false positives or negatives, have suggestions for additional rules, or have other feedback, please
> open an issue or pull request!


### React

#### `noEffectInitialiseState`

Disallow using an Effect to initialise state.

```typescript
import { useEffect, useState } from "react";

function Component() {
	const [state, setState] = useState<string>();

	useEffect(() => {
		// 🔴 Avoid: initialising state in an Effect. Instead, initialise with "Hello World". For
        // SSR hydration, prefer "useSyncExternalStore".
		setState("Hello World");
	}, []);
}
```

Source: [Avoiding Hydration Mismatches with useSyncExternalStore](https://tkdodo.eu/blog/avoiding-hydration-mismatches-with-use-sync-external-store)

#### `noEffectDeriveState`

Disallow using an Effect to derive new state based on existing state or props.

```typescript
import { useEffect, useState } from "react";

function Form() {
	const [firstName, setFirstName] = useState("Taylor");
	const [lastName, setLastName] = useState("Swift");

	// 🔴 Avoid: redundant state and unnecessary Effect
	const [fullName, setFullName] = useState("");

	useEffect(() => {
		setFullName(firstName + " " + lastName);
	}, [firstName, lastName]);
}
```

Source: [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes)

#### `noEffectChain`

Disallow using chains of Effects to trigger each other.

```typescript
import { useEffect, useState } from "react";

function Game() {
	const [card, setCard] = useState(null);
	const [goldCardCount, setGoldCardCount] = useState(0);
	const [round, setRound] = useState(1);
	const [isGameOver, setIsGameOver] = useState(false);

	// 🔴 Avoid: Chains of Effects that adjust the state solely to trigger each other
	useEffect(() => {
		if (card !== null) {
			setGoldCardCount((c) => c + 1);
		}
	}, [card]);

	useEffect(() => {
		if (goldCardCount > 3) {
			setRound((r) => r + 1);
			setGoldCardCount(0);
		}
	}, [goldCardCount]);

	useEffect(() => {
		if (round > 5) {
			setIsGameOver(true);
		}
	}, [round]);

	useEffect(() => {
		alert("Good game!");
	}, [isGameOver]);
}
```

Source: [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect#chains-of-computations)

#### `noEffectFetchWithoutCleanup`

Disallow using an Effect to trigger a network request without an accompanying cleanup function on unmount.

```typescript
import { useEffect, useState } from "react";

function SearchResults(query: string) {
	const [results, setResults] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		// 🔴 Avoid: Fetching without cleanup logic
		fetch(query, {}).then(async (json) => {
			setResults(await json.json());
		});
	}, [query, page]);
}
```

Source: [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect#fetching-data)

#### `noEffectPassStateToParent`

Disallow using an Effect to pass internal state to the parent component.

```typescript
import { useEffect, useState } from "react";

const isCloserToRightEdge = (e: unknown) => true;

function Toggle(onChange: (isOn: boolean) => void) {
	const [isOn, setIsOn] = useState(false);

	// 🔴 Avoid: The onChange handler runs too late
	useEffect(() => {
		onChange(isOn);
	}, [isOn, onChange]);

	function handleClick() {
		setIsOn(!isOn);
	}

	function handleDragEnd(e: unknown) {
		if (isCloserToRightEdge(e)) {
			setIsOn(true);
		} else {
			setIsOn(false);
		}
	}
}
```

Source: [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect#notifying-parent-components-about-state-changes)

#### `noEffectEventHandler`

Disallow using an Effect for event-specific logic.

```typescript
import { useEffect } from "react";

const showNotification = (message: string) => {};
const navigateTo = (path: string) => {};

type Product = {
	name: string;
	isInCart: boolean;
};

function ProductPage({
	product,
	addToCart,
}: {
	product: Product;
	addToCart: (product: Product) => void;
}) {
	// 🔴 Avoid: Event-specific logic inside an Effect
	useEffect(() => {
		if (product.isInCart) {
			showNotification(`Added ${product.name} to the shopping cart!`);
		}
	}, [product]);

	function handleBuyClick() {
		addToCart(product);
	}

	function handleCheckoutClick() {
		addToCart(product);
		navigateTo("/checkout");
	}
}
```

Source: [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect#sharing-logic-between-event-handlers)

#### `noEffectResetState`

Disallow using an Effect solely to reset state to its initial value.

```typescript
import { useEffect, useState } from "react";

function ProfilePage(userId: number) {
	const [comment, setComment] = useState("");

	// 🔴 Avoid: Resetting state on prop change in an Effect
	useEffect(() => {
		setComment("");
	}, [userId]);
}
```

Source: [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect#resetting-all-state-when-a-prop-changes)

#### `noEffectSetStateOnPropChange`

Disallow using an Effect to set state based solely on props.

```typescript
import { useEffect, useState } from "react";

function List(items: unknown) {
	const [isReverse, setIsReverse] = useState(false);
	const [selection, setSelection] = useState(null);

	// 🔴 Avoid: Adjusting state on prop change in an Effect
	useEffect(() => {
		setSelection(null);
	}, [items]);
}
```

Source: [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes)

#### `noEffectSyncExternalStore`

Disallow using an Effect to synchronise state with an external store.

```typescript
import { useEffect, useState } from "react";

function useOnlineStatus() {
	// Not ideal: Manual store subscription in an Effect
	const [isOnline, setIsOnline] = useState(true);
	useEffect(() => {
		function updateState() {
			setIsOnline(navigator.onLine);
		}

		updateState();

		window.addEventListener("online", updateState);
		window.addEventListener("offline", updateState);
		return () => {
			window.removeEventListener("online", updateState);
			window.removeEventListener("offline", updateState);
		};
	}, []);

	return isOnline;
}
```

Source: [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect#subscribing-to-an-external-store)

#### `noEffectEmpty`

Disallow using an Effect which is empty.

```typescript
import { useEffect } from "react";

function Game() {
	const count = 0;

	// 🔴 Avoid: Effects with no body
	useEffect(() => {
        // Empty!
    }, []);

	useEffect(() => {
		// Empty!
	}, [count]);
}
```

#### `noEffectManageParent`

Disallow using an Effect which only depends on props.

```typescript
import { useEffect } from "react";

function Modal(
	arg: boolean,
	{ isOpen, close }: { isOpen: boolean; close: () => void },
) {
	useEffect(() => {
		// do something
	}, [arg, isOpen, close]);

	return <></>;
}
```

## Limitations

### Derived State and Properties

Due to limitations in [GritQL](https://biomejs.dev/reference/gritql/), the query language used by [Biome plugins](https://biomejs.dev/linter/plugins/), rules are not able to
recursively pattern-match, and therefore are unable to follow variable references or chains of callbacks. This means rules fall short of identifying anti-patterns in
_highly dynamic_ or _obfuscated_ code.

Most rules attempt to identify anti-patterns one level of derivation deep - though this is not always guaranteed:

```typescript
import { useEffect, useState } from "react";

function Form() {
	const [firstName, setFirstName] = useState("Taylor");
	const [lastName, setLastName] = useState("Swift");

	const [fullName, setFullName] = useState("");

	useEffect(() => {
        // Caught by `noEffectDeriveState`
		setFullName(firstName + " " + lastName);
	}, [firstName, lastName]);

	useEffect(() => {
        // Caught by `noEffectDeriveState`
        const newFullName = firstName + " " + lastName;
		setFullName(newFullName);
	}, [firstName, lastName]);

	useEffect(() => {
        // NOT caught by `noEffectDeriveState`
        const newFullName = firstName + " " + lastName;
        const extraNewFullName = newFullName;
		setFullName(extraNewFullName);
	}, [firstName, lastName]);
}
```

## Acknowledgements

- [React: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) for inspiration around common React Effect anti-patterns.
- [eslint-plugin-react-you-might-not-need-an-effect](https://github.com/nickjvandyke/eslint-plugin-react-you-might-not-need-an-effect) for inspiration on rule patterns, edge cases and tests.
- [TkDodo: Avoiding Hydration Mismatches with useSyncExternalStore](https://tkdodo.eu/blog/avoiding-hydration-mismatches-with-use-sync-external-store) for inspiration on external store anti-patterns.