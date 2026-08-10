import { useEffect, useState } from "react";

function List({ items }) {
	const [selection, setSelection] = useState();
	const [internalData, setInternalData] = useState();

	useEffect(() => {
		setSelection(internalData);
	}, [items, internalData]);
}
