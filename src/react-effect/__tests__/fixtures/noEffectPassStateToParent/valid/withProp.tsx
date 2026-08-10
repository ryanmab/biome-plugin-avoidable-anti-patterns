import { useEffect } from "react";

const Child = ({
	text,
	onTextChanged,
}: {
	text: string;
	onTextChanged: (s: string) => void;
}) => {
	useEffect(() => {
		onTextChanged(text);
	}, [text, onTextChanged]);
};
