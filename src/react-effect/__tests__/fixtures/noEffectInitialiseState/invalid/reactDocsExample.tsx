import { useEffect, useState } from "react";

function Component() {
	const [state, setState] = useState<string>();

	useEffect(() => {
		// ❌ Avoid initializing state in an effect. Instead, initialize "state"'s "useState()" with "Hello World". For SSR hydration, prefer "useSyncExternalStore".
		setState("Hello World");
	}, []);
}
