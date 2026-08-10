import { useEffect, useState } from "react";

const readExternal = () => 1;

function C() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const update = setCount;
		update(readExternal());
		return () => setCount(0);
	}, []);
}
