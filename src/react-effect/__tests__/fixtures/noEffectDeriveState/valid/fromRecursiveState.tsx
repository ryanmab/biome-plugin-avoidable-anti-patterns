import { useEffect, useState } from "react";

function Form() {
	const [fullName, setFullName] = useState("");

	useEffect(() => {
		setFullName(fullName);
	}, [fullName]);
}
