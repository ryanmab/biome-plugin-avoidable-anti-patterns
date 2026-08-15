import { useEffect } from "react";

function Modal(
    arg: unknown,
    { isOpen: isActive, close: deactivate }: { isOpen: boolean; close: () => void },
) {
    const derivedOpen = isActive;
    const derivedClose = deactivate;

    useEffect(() => {
        // do something
    }, [arg, derivedOpen, derivedClose]);

    return <></>;
}