import { useState, useEffect } from "react";

function Counter() {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		setTotal((prev) => prev + 1);
	}, [count]);
}
