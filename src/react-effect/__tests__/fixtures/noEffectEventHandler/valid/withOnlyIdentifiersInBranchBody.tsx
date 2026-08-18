import { useEffect } from "react";

function Form({ value: v }: { value: () => void }) {
    useEffect(() => {
        if (true) {
            v()
        }
    }, []);
}