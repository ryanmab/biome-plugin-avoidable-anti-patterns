import { useEffect, useState } from "react";

function SearchResults(query: string) {
	const [results, setResults] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		// 🔴 Avoid: Fetching without cleanup logic
		fetch(query, {}).then(async (json) => {
			setResults(await json.json());
		});
	}, [query, page]);

	function handleNextPageClick() {
		setPage(page + 1);
	}
}
