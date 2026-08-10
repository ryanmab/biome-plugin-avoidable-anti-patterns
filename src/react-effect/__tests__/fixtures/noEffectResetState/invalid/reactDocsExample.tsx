import { useEffect, useState } from "react";

export default function ProfilePage(userId: number) {
	const [comment, setComment] = useState("");

	// 🔴 Avoid: Resetting state on prop change in an Effect
	useEffect(() => {
		setComment("");
	}, [userId]);
	// ...
}
