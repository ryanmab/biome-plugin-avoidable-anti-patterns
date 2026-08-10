import { useEffect, useState } from "react";

function MyComponent() {
	const [state, setState] = useState<string>();
	const [other, setOther] = useState<string>();

	// Can be ignored as `useExhaustiveDependencies` will flag the unnecessary dependency
	useEffect(() => {
		setState("Hello");
	}, [other]);
}
