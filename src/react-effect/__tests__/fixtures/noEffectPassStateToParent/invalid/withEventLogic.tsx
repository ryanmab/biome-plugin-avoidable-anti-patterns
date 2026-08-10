import { useEffect, useState } from "react";

function Form({ onSubmit }: { onSubmit: (d: unknown) => void }) {
	const [name, setName] = useState<string>();
	const [dataToSubmit, setDataToSubmit] = useState<unknown>();

	useEffect(() => {
		if (!dataToSubmit) return;

		onSubmit(dataToSubmit);
	}, [dataToSubmit]);

	return (
		<div>
			<input
				name="name"
				type="text"
				onChange={(e) => setName(e.target.value)}
			/>
			<button type="button" onClick={() => setDataToSubmit({ name })}>
				Submit
			</button>
		</div>
	);
}
