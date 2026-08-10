import { useEffect, useState } from "react";

function DoubleList({ list }) {
	const [doubleList, setDoubleList] = useState([]);

	useEffect(() => {
		setDoubleList(list.concat(list));
	}, [list]);
}
