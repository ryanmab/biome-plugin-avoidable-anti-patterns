import { useEffect, useState } from "react";

export default function ProfilePage(userId: number) {
	const [comment, setComment] = useState("");
	const [profilePicture, setProfilePicture] = useState(null);

	useEffect(() => {
		setComment("");
		setProfilePicture(null);
	}, [userId]);
}
