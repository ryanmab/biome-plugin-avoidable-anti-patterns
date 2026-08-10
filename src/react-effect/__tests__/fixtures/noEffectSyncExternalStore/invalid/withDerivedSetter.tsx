import { useEffect, useState } from "react";

function useOnlineStatus() {
	// Not ideal: Manual store subscription in an Effect
	const [isOnline, setIsOnline] = useState(true);

	useEffect(() => {
		const updateState = () => {
			setIsOnline(navigator.onLine);
		};

		updateState();

		return () => updateState;
	}, []);
	return isOnline;
}
