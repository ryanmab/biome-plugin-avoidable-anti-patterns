import { useEffect, useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	const [otherState, setOtherState] = useState<string>();

	useEffect(() => {
		setOtherState("Hello World");
	}, [count]);
}
