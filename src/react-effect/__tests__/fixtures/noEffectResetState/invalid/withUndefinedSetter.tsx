import { useEffect, useState } from "react";

export default function ProfilePage(userId: number) {
	const [comment, setComment] = useState(undefined);

	useEffect(() => {
		// @ts-ignore TS wont allow no argument passed in
		setComment();
	}, [userId]);
}
