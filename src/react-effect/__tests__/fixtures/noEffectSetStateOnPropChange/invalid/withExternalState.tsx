import { useEffect, useState } from "react";

const useDataSource = () => ({ data: "" });

function List({ items }) {
	const [selection, setSelection] = useState<string>();
	const { data: externalData } = useDataSource();

	useEffect(() => {
		setSelection(externalData);
	}, [items]);
}
