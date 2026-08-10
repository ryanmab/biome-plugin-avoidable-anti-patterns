import { useEffect, useState } from "react";

function Counter({ count }: { count: number }) {
	const [doubleCount, setDoubleCount] = useState(0);

	useEffect(() => {
		setDoubleCount(count * 2);
	}, [count]);

	useEffect(() => {
		const doubled = count * 2;
		setDoubleCount(doubled);
	}, [count]);
}
