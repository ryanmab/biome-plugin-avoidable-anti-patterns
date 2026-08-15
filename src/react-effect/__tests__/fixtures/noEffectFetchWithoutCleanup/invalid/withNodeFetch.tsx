import { useEffect, } from "react";
import fetch from 'node-fetch'

function SearchResults(query: string) {
    useEffect(async () => {
        await fetch("https://example.com")
    }, [query]);
}