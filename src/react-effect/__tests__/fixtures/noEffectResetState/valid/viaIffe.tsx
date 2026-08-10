import { useEffect, useState } from "react";

function MyComponent() {
	const [state, setState] = useState<string>("Hello");

	useEffect(() => {
		(() => {
			setState("Hello");
		})();
	}, []);

	useEffect(() => {
		(async () => {
			setState("Hello");
		})();
	}, []);
}
