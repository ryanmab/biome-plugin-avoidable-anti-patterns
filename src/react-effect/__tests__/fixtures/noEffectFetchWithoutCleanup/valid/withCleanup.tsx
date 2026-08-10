import { useEffect, useState } from "react";

function SearchResults(query: string) {
	const [results, setResults] = useState([]);

	useEffect(() => {
		let ignore = false;

		fetch(query, {}).then(async (json) => {
			if (ignore) {
				return;
			}

			setResults(await json.json());
		});

		return () => (ignore = true);
	}, [query]);
}
