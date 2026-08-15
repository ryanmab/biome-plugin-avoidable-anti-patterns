import { useEffect, useState } from "react";

function List({ items: i, user: u }) {
    const [selection, setSelection] = useState<null>();

    useEffect(() => {
        setSelection(null);
    }, [i, u]);
}