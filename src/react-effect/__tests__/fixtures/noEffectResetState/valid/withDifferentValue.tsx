import { useEffect, useState } from "react";

export default function ProfilePage(userId: number) {
	const [comment, setComment] = useState<string | null>("");

	useEffect(() => {
		setComment(null);
	}, [userId]);
}
