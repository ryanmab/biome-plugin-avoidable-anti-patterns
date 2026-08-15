import { useEffect, } from "react";
import $ from 'jquery';

function SearchResults(query: string) {
    useEffect(async () => {
        await $.ajax("https://example.com")
    }, [query]);
}