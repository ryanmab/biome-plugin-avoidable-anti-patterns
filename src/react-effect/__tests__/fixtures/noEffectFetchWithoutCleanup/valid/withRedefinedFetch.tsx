import { useEffect, } from "react";

function SearchResults(query: string) {
    const fetch = () => { }

    useEffect(async () => {
        await fetch("https://example.com")
    }, [query]);
}