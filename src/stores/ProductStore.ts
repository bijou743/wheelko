import { CartItem } from '@/classes/CartItem';
import type { ICartItem } from '@/interfaces/ICartItem';
import type { ICategory } from '@/interfaces/ICategory';
import { defineStore } from 'pinia';
import type { IProduct } from '../interfaces/IProduct';

const STORE_URL = 'https://api.npoint.io/bfaf4910ddb275d466cd';

export const useProductStore = defineStore('productStore', {
	state: () => ({
		products: [] as IProduct[],
		categories: [] as ICategory[],
		loading: false,
		cart: [] as ICartItem[],
	}),
	getters: {
		getGamesOfWeek(): IProduct[] {
			return this.products.filter((p) => p.gameOfWeek).slice(0, 3);
		},
		getPopular(): IProduct[] {
			return this.products.filter((p) => p.popular).slice(0, 3);
		},
		getSale(): IProduct[] {
			return this.products.filter((p) => p.discountPrice).slice(0, 3);
		},
		getGamesByCategory:
			(state) =>
			(category: string | string[]): IProduct[] => {
				if (typeof category === 'string') {
					return state.products.filter((p) => p.category == parseInt(category));
				} else {
					return [];
				}
			},
		getCategoryById:
			(state) =>
			(id: string | string[]): ICategory | undefined => {
				if (typeof id === 'string') {
					return state.categories.find((c) => c.id == parseInt(id));
				} else {
					return undefined;
				}
			},
		getGameById:
			(state) =>
			(id: string | string[]): IProduct | undefined => {
				if (typeof id === 'string') {
					return state.products.find((p) => p.id == parseInt(id));
				} else {
					return undefined;
				}
			},
		searchGamesByName:
			(state) =>
			(name: string): IProduct[] => {
				return state.products.filter((p) =>
					p.title.toLowerCase().includes(name.toLowerCase())
				);
			},
		calcCartTotalSum(): number {
			return this.cart.reduce(
				(sum, item) => sum + item.product.price * item.quantity,
				0
			);
		},
		isProductInCart:
			(state) =>
			(product: IProduct): boolean => {
				return (
					state.cart.find((item) => item.product.id === product.id) !==
					undefined
				);
			},
	},
	actions: {
		async getData() {
			this.loading = true;
			await this.getProducts();
			await this.getCategories();
			this.loading = false;
		},
		async getProducts() {
			try {
				const res = await fetch(STORE_URL + '/products');
				const data = await res.json();
				this.products = data;
			} catch (err) {
				console.log('getProducts error', err);
			}
		},
		async getCategories() {
			try {
				const res = await fetch(STORE_URL + '/categories');
				const data = await res.json();
				this.categories = data;
			} catch (err) {
				console.log('getCategories error', err);
			}
		},
		addToCart(product: IProduct | undefined) {
			if (!product) {
				return;
			}

			if (
				this.cart.find((item) => item.product.id === product.id) === undefined
			) {
				this.cart.push(new CartItem(product, 1));
			}
		},
		changeQuantityInCart(productId: number, quantity: number): void {
			this.cart.map((item) => {
				if (item.product.id === productId) {
					item.quantity = quantity;
				}
			});
		},
		deleteFromCart(productId: number): void {
			this.cart.map((item, index) => {
				if (item.product.id === productId) {
					this.cart.splice(index, 1);
					return;
				}
			});
		},
		clearCart() {
			this.cart = [];
		},
	},
});
