import { useEffect, useState } from "react";

function C() {
	const [isOnline, setIsOnline] = useState(true);

	useEffect(() => {
		setIsOnline(navigator.onLine);
		return () => setIsOnline(false);
	}, []);
}
