import { useEffect, useState } from "react";

const isCloserToRightEdge = (e: unknown) => true;

function Toggle(onChange: (isOn: boolean) => void) {
	const [isOn, setIsOn] = useState(false);

	// 🔴 Avoid: The onChange handler runs too late
	useEffect(() => {
		onChange(isOn);
	}, [isOn, onChange]);

	function handleClick() {
		setIsOn(!isOn);
	}

	function handleDragEnd(e: unknown) {
		if (isCloserToRightEdge(e)) {
			setIsOn(true);
		} else {
			setIsOn(false);
		}
	}

	// ...
}
