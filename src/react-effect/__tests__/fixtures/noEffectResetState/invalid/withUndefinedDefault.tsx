import { useEffect, useState } from "react";

function List({ items }) {
	const [selectedItem, setSelectedItem] = useState();

	useEffect(() => {
		setSelectedItem(undefined);
	}, [items]);
}
