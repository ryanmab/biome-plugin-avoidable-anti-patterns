import { useEffect, useState } from "react";

function MyComponent() {
	const [state, setState] = useState<string>();

	useEffect(() => {
		useEffect(() => {
			(() => {
				setState("Hello");
			})();
		}, []);

		(async () => {
			const response = await fetch("https://example.com");
			const data = await response.text();
			setState(data);
		})();
	}, []);
}
