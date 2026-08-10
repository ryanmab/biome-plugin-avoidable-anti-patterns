import { useEffect } from "react";

function Modal(
	arg: boolean,
	{ isOpen, close }: { isOpen: boolean; close: () => void },
) {
	const x = "";

	useEffect(() => {
		// do something
	}, [x, arg, isOpen, close]);

	return <></>;
}
