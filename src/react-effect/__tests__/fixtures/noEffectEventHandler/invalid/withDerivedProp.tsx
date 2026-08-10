import { useEffect } from "react";

function Form({ value }: { value: string }) {
	const derived = value + 2;

	useEffect(() => {
		if (derived === "a") return;
		if (derived === "b") return;
	}, [derived]);
}
