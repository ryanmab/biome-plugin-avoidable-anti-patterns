import { useEffect, useState } from "react";

const Child = ({
	onTextChanged,
}: {
	onTextChanged: (s: string | undefined) => void;
}) => {
	const [text, setText] = useState<string>();

	useEffect(() => {
		onTextChanged(text);
	}, []);

	return <input type="text" onChange={(e) => setText(e.target.value)} />;
};
