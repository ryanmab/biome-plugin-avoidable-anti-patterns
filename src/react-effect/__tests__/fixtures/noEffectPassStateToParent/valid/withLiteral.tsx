import { useEffect } from "react";

const Child = ({ onTextChanged }: { onTextChanged: (s: string) => void }) => {
	useEffect(() => {
		onTextChanged("Hello World");
	}, [onTextChanged]);
};
