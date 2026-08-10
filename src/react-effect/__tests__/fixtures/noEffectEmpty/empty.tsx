import { useEffect, useState } from "react";

function Game() {
	const count = 0;

	// 🔴 Avoid: Effects with no body
	useEffect(() => {}, []);

	useEffect(() => {
		// Empty!
	}, [count]);
}
