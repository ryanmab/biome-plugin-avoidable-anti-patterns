import { useEffect, useState } from "react";

function List({ items }) {
	const [selection, setSelection] = useState<null>();

	useEffect(() => {
		setSelection(null);
	}, [items]);
}
