import { useEffect, useState } from "react";

function MyComponent() {
	const [state, setState] = useState();

	useEffect(() => {
		fetch("https://api.example.com/data")
			.then((response) => response.json())
			.then((data) => setState(data));
	}, []);
}
