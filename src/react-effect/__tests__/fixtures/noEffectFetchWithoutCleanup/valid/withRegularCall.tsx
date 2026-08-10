import { useEffect, useState } from "react";

const someFunction = (): Promise<void> => {
	return new Promise(() => {});
};

function SearchResults(query: string) {
	const [results, setResults] = useState<string[]>([]);

	useEffect(() => {
		// 🔴 Avoid: Fetching without cleanup logic
		someFunction().then(async () => {
			setResults(["a"]);
		});
	}, [query]);
}
