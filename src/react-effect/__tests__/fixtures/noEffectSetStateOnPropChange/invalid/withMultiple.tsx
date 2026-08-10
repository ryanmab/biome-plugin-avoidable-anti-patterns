import { useEffect, useState } from "react";

function List({ items, user }) {
	const [selection, setSelection] = useState<null>();

	useEffect(() => {
		setSelection(null);
	}, [items, user]);
}
