import { useEffect, useState } from "react";

function Form() {
	const [firstName, setFirstName] = useState("Taylor");
	const [lastName, setLastName] = useState("Swift");

	const x = "Hello World";

	const [fullName, setFullName] = useState("");

	useEffect(() => {
		setFullName(x);
	}, [firstName, lastName]);
}
