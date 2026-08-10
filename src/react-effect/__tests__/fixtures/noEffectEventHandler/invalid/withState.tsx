import { useEffect, useState } from "react";

const submitData = (d: unknown) => {};

function Form() {
	const [name, setName] = useState<string>();
	const [dataToSubmit, setDataToSubmit] = useState<unknown>();

	useEffect(() => {
		if (dataToSubmit) {
			submitData(dataToSubmit);
		}
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
