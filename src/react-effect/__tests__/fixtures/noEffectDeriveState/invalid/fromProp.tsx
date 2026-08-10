import { useEffect, useState } from "react";

function Form({ p }: { p: string }) {
	const [fullName, setFullName] = useState("");

	useEffect(() => {
		setFullName(p);
	}, [p]);
}
