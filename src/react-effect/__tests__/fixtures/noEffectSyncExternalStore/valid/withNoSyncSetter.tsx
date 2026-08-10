import { useEffect, useState } from "react";

function C() {
	const [value, setValue] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => setValue(Date.now()), 1000);

		return () => clearInterval(timer);
	}, []);
}
