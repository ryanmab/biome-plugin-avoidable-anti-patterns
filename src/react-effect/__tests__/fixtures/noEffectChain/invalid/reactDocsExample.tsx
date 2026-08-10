import { useEffect, useState } from "react";

function Game() {
	const [card, setCard] = useState(null);
	const [goldCardCount, setGoldCardCount] = useState(0);
	const [round, setRound] = useState(1);
	const [isGameOver, setIsGameOver] = useState(false);

	// 🔴 Avoid: Chains of Effects that adjust the state solely to trigger each other
	useEffect(() => {
		if (card !== null) {
			setGoldCardCount((c) => c + 1);
		}
	}, [card]);

	useEffect(() => {
		if (goldCardCount > 3) {
			setRound((r) => r + 1);
			setGoldCardCount(0);
		}
	}, [goldCardCount]);

	useEffect(() => {
		if (round > 5) {
			setIsGameOver(true);
		}
	}, [round]);

	useEffect(() => {
		alert("Good game!");
	}, [isGameOver]);

	function handlePlaceCard(nextCard: null) {
		if (isGameOver) {
			throw Error("Game already ended.");
		} else {
			setCard(nextCard);
		}
	}
}
