import { useEffect } from "react";

function Form({ value: v }: { value: string }) {
    const derived = v + 2;

    useEffect(() => {
        if (derived === "a") return;
        if (derived === "b") return;
    }, [derived]);
}