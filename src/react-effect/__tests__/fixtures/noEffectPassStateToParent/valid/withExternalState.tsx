import { useEffect } from "react";

const useSomeApi = () => {};

const Child = ({ onFetched }: { onFetched: (s: unknown) => void }) => {
	const data = useSomeApi();

	useEffect(() => {
		onFetched(data);
	}, [onFetched, data]);
};
