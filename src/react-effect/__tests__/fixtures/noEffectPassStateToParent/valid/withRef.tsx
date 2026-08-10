import { useEffect, useRef } from "react";

const Child = ({ onRef }: { onRef: (ref: unknown) => void }) => {
	const ref = useRef(null);

	useEffect(() => {
		onRef(ref.current);
	}, [onRef, ref.current]);

	return <div ref={ref}>Child</div>;
};
