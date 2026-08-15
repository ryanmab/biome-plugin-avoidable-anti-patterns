import { useEffect, } from "react";

function SearchResults(query: string) {
    useEffect(async () => {
        await fetch("https://example.com")
    }, [query]);
}