import { useState } from "react";

function Form() {
	const [firstName, setFirstName] = useState("Hello");
	const [lastName, setLastName] = useState("World");

	const fullName = firstName + " " + lastName;
}
