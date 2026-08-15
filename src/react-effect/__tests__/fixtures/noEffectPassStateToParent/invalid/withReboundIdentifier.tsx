import { useEffect, useState } from "react";

const Child = (
    onStart: (s: string | undefined) => void,
    {
        onTextChanged: onChange,
    }: {
        onTextChanged: (s: string | undefined) => void;
    }) => {
    const [text, setText] = useState<string>("");

    useEffect(() => {
        const firstChar = text[0];
        onChange(firstChar);
    }, [onChange, text]);

    useEffect(() => {
        const firstChar = text[0];
        onStart(firstChar);
    }, [onStart, text]);

    return <input type="text" onChange={(e) => setText(e.target.value)} />;
};