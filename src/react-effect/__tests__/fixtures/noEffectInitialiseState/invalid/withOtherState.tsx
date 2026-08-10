import { useEffect, useState } from "react";

function MyComponent() {
	const [state, setState] = useState<string>();
	const [otherState, setOtherState] = useState("Hello World");

	useEffect(() => {
		setState(otherState);
	}, []);
}
