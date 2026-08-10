import { useEffect, useState } from "react";

function Form({ result }: { result: { data: unknown } }) {
	const [error, setError] = useState<unknown>();

	useEffect(() => {
		if (result.data) {
			setError(null);
		}
	}, [result]);
}
