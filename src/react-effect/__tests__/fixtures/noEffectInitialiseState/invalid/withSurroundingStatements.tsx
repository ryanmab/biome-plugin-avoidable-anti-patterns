import { useEffect, useState } from "react";

function MyComponent() {
	const [state, setState] = useState<string>();

	useEffect(() => {
		console.log("Hello");
		setState("Hello World");
		console.log("World");
	}, []);
}
