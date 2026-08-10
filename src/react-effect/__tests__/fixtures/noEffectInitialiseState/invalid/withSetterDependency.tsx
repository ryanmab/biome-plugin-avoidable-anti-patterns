import { useEffect, useState } from "react";

function MyComponent() {
	const [state, setState] = useState<string>();

	useEffect(() => {
		setState("Hello");
	}, [setState]);
}
