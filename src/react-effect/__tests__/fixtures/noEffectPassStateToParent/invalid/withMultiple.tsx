import { useEffect, useState } from "react";

const Child = ({
	onChanged,
}: {
	onChanged: (s: string | undefined, c: number) => void;
}) => {
	const [text, setText] = useState<string>();
	const [count, setCount] = useState(0);

	useEffect(() => {
		onChanged(text, count);
	}, [onChanged, text, count]);
};
