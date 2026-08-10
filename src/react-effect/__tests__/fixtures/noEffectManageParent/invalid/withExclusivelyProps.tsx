import { useEffect } from "react";

function Modal(
	arg: boolean,
	{ isOpen, close }: { isOpen: boolean; close: () => void },
) {
	useEffect(() => {
		// do something
	}, [arg, isOpen, close]);

	return <></>;
}
