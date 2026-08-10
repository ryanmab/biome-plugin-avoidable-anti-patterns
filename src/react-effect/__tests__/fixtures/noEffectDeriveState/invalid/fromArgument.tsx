import { useEffect, useState } from "react";

function Form(p) {
	const [fullName, setFullName] = useState("");

	useEffect(() => {
		setFullName(p);
	}, [p]);
}
