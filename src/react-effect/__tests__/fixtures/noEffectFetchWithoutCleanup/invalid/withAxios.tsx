import { useEffect,  } from "react";
import axios from 'axios';

function SearchResults(query: string) {
	useEffect(async () => {
        await axios("https://example.com")
	}, [query]);

	useEffect( () => {
         axios.get("https://example.com").then()
	}, [query]);
}