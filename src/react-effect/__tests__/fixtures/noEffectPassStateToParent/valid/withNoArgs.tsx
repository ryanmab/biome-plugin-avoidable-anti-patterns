import { useEffect, useState } from "react";

function Form({ onClose }: { onClose: () => void }) {
	const [name, setName] = useState();
	const [isOpen, setIsOpen] = useState(true);

	useEffect(() => {
		if (!isOpen) {
			onClose();
		}
	}, [isOpen]);

	return (
		<button type="button" onClick={() => setIsOpen(false)}>
			Close
		</button>
	);
}
