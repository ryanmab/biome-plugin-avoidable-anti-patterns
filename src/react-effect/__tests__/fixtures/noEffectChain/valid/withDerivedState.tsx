import { useEffect, useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	const [doubleCount, setDoubleCount] = useState(0);

	useEffect(() => {
		setDoubleCount(count * 2);
	}, [count]);
}
