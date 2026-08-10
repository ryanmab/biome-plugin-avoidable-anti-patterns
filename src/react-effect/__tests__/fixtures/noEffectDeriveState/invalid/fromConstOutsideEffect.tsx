import { useEffect, useState } from "react";

function Form() {
	const [firstName, setFirstName] = useState("Hello");
	const [lastName, setLastName] = useState("World");
	const [fullName, setFullName] = useState("");
	const name = firstName + " " + lastName;

	useEffect(() => {
		setFullName(name);
	}, [name]);
}
