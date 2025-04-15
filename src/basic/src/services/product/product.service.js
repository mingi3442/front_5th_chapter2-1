export const ProductService = (productStore) => ({
	// ID로 상품 찾기
	findProductById: (productId) => {
		const product = productStore.findProductById(productId);
		if (!product) return null;

		return {
			id: product.id,
			name: product.name,
			price: product.price,
			quantity: product.quantity,
		};
	},

	// 재고 감소
	decreaseProduct: (productId, amount = 1) => {
		return productStore.decreaseProductQuantity(productId, amount);
	},

	// 재고 증가
	increaseProductQuantity: (productId, amount = 1) => {
		return productStore.increaseProductQuantity(productId, amount);
	},
});
