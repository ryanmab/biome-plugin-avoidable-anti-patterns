import { useEffect, useState } from "react";

function Form({ p }: { p: string }) {
	const x = "Hello";
	const [firstName, setFirstName] = useState("");
	const [fullName, setFullName] = useState("");

	useEffect(() => {
		setFullName(p + x + firstName);
	}, [p]);
}
