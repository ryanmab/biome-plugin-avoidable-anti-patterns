import { useEffect, useState } from "react";

export const MyComponent = () => {
	const [state, setState] = useState<string>();

	useEffect(() => {
		window.addEventListener("load", () => setState("Loaded"));
	}, []);
};
