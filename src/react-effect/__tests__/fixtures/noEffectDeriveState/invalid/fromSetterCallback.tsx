import { useState, useEffect } from "react";

function Counter({ count }) {
	const [total, setTotal] = useState(count);

	useEffect(() => {
		setTotal((prev) => prev + count);
	}, [count]);
}
