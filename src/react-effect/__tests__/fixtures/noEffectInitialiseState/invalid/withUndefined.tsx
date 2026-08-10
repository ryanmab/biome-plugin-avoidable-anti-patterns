import { useEffect, useState } from "react";

function MyComponent() {
	const [state, setState] = useState<string | undefined>("Hello World");

	useEffect(() => {
		// @ts-ignore TS wont allow no argument passed in
		setState();
	}, []);
}
