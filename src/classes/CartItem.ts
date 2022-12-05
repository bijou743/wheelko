import type { ICartItem } from '@/interfaces/ICartItem';
import type { IProduct } from '@/interfaces/IProduct';

export class CartItem implements ICartItem {
	product: IProduct;
	quantity: number;

	constructor(product: IProduct, quantity: number) {
		this.product = product;
		this.quantity = quantity;
	}
}
