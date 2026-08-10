import { useEffect, useState } from "react";

const getPlaceholder = () => "Hello World";

function ProfilePage({ userId }) {
	const [comment, setComment] = useState(getPlaceholder());

	useEffect(() => {
		setComment(getPlaceholder());
	}, [userId]);
}
