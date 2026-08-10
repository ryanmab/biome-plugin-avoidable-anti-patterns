import { useEffect, useState } from "react";

function List(items: unknown) {
	const [isReverse, setIsReverse] = useState(false);
	const [selection, setSelection] = useState(null);

	// 🔴 Avoid: Adjusting state on prop change in an Effect
	useEffect(() => {
		setSelection(null);
	}, [items]);
	// ...
}
