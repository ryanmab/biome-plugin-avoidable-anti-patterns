import { useEffect } from "react";

function Modal(
	arg: unknown,
	{ isOpen, close }: { isOpen: boolean; close: () => void },
) {
	const derivedOpen = isOpen;
	const derivedClose = close;

	useEffect(() => {
		// do something
	}, [arg, derivedOpen, derivedClose]);

	return <></>;
}
