import { useEffect, useState } from "react";

function MyComponent() {
	const current = "Hello World";
	const [state, setState] = useState<string>(current);

	useEffect(() => {
		const updated = "Hello World";

		setState(updated);
	}, []);
}
