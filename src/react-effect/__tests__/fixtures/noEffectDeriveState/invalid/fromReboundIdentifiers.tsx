import { useEffect, useState } from "react";

function Form({ p: q }: { p: string }) {
    const [fullName, setFullName] = useState("");

    useEffect(() => {
        setFullName(q);
    }, [q]);
}