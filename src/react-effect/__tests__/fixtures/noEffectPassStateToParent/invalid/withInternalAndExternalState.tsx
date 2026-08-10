import { useEffect, useState } from "react";

const useSomeApi = () => {};

const Child = ({
	onTextChanged,
}: {
	onTextChanged: (s: string | undefined, d: unknown) => void;
}) => {
	const [text, setText] = useState<string>();
	const data = useSomeApi();

	useEffect(() => {
		onTextChanged(text, data);
	}, [onTextChanged, text, data]);

	return <input type="text" onChange={(e) => setText(e.target.value)} />;
};
