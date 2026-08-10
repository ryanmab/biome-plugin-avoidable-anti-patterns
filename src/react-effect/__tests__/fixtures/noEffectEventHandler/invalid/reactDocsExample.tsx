import { useEffect } from "react";

const showNotification = (message: string) => {};
const navigateTo = (path: string) => {};

type Product = {
	name: string;
	isInCart: boolean;
};

function ProductPage({
	product,
	addToCart,
}: {
	product: Product;
	addToCart: (product: Product) => void;
}) {
	// 🔴 Avoid: Event-specific logic inside an Effect
	useEffect(() => {
		if (product.isInCart) {
			showNotification(`Added ${product.name} to the shopping cart!`);
		}
	}, [product]);

	function handleBuyClick() {
		addToCart(product);
	}

	function handleCheckoutClick() {
		addToCart(product);
		navigateTo("/checkout");
	}
	// ...
}
