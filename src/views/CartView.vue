<script setup lang="ts">
import { useProductStore } from '@/stores/ProductStore';

const productStore = useProductStore();

// изменения количества товаров в корзине
const changeQuantity = (event: Event) => {
	const button = (event.target as HTMLButtonElement).closest('button')!;
	const form = button.closest('form')!;
	const input = form.querySelector('input')!;
	const productId = input.dataset.product!;
	const type = button.dataset.type;

	if (type === 'minus') {
		let value = +input.value - 1;
		if (value < 1) {
			value = 1;
		}
		input.value = value.toString();
	} else {
		input.value = (+input.value + 1).toString();
	}

	productStore.changeQuantityInCart(parseInt(productId), parseInt(input.value));
};

// удалить товар из корзины
const deleteFromCart = (event: Event) => {
	const button = (event.target as HTMLButtonElement).closest('button')!;
	const productId = button.dataset.product!;
	productStore.deleteFromCart(parseInt(productId));
};

// создать заказ
const createOrder = () => {
	alert('Заказ успешно оформлен!');
	productStore.clearCart();
};
</script>

<template>
	<div class="container py-10 flex gap-10">
		<aside class="hidden lg:block basis-1/4"></aside>

		<main class="w-full lg:w-auto lg:basis-3/4">
			<h1>Корзина</h1>

			<div v-if="productStore.cart.length === 0">
				<p>В корзине пока нет товаров.</p>
				<RouterLink to="/catalog" class="btn mt-3">в каталог</RouterLink>
			</div>

			<div v-else>
				<div class="table w-full">
					<div class="hidden md:table-row text-gray-400">
						<div class="cell w-28">Товаров: {{ productStore.cart.length }}</div>
						<div class="cell"></div>
						<div class="cell cell__hidden w-32 text-center">Цена</div>
						<div class="cell w-24 text-center">Кол-во</div>
						<div class="cell w-32 text-center">Сумма</div>
						<div class="cell w-16"></div>
					</div>
					<div v-for="item in productStore.cart" class="row">
						<div class="cell image">
							<RouterLink :to="`/catalog/product/${item.product.id}`">
								<img
									:src="`${item.product.image}`"
									:alt="`${item.product.title}`"
									class="w-24"
								/>
							</RouterLink>
						</div>
						<div class="cell title align-middle">
							<RouterLink
								:to="`/catalog/product/${item.product.id}`"
								class="flex items-center gap-x-6"
							>
								{{ item.product.title }}
							</RouterLink>
						</div>
						<div class="cell price cell__hidden align-middle text-center">
							{{ item.product.price }} Р
						</div>
						<div class="cell quantity align-middle text-center">
							<form class="flex justify-around items-center">
								<button type="button" @click="changeQuantity" data-type="minus">
									<font-awesome-icon icon="fa-solid fa-minus" />
								</button>
								<input
									type="text"
									:value="item.quantity"
									:data-product="item.product.id"
								/>
								<button type="button" @click="changeQuantity" data-type="plus">
									<font-awesome-icon icon="fa-solid fa-plus" />
								</button>
							</form>
						</div>
						<div class="cell total align-middle md:text-center text-right">
							{{ item.product.price * item.quantity }} Р
						</div>
						<div class="cell delete">
							<button
								type="button"
								:data-product="item.product.id"
								@click="deleteFromCart"
							>
								<font-awesome-icon
									icon="fa-solid fa-xmark"
									class="opacity-50 text-base md:text-2xl cursor-pointer"
								/>
							</button>
						</div>
					</div>
				</div>

				<button class="btn mt-4" @click="createOrder">оформить заказ</button>
			</div>
		</main>
	</div>
</template>

<style scoped lang="scss">
.image {
	grid-area: image;
}

.title {
	grid-area: title;
}

.quantity {
	grid-area: quantity;
}

.total {
	grid-area: total;
}

.delete {
	grid-area: delete;
}

.table {
	.row {
		@apply md:table-row grid relative border-b-2 md:border-0 pb-5 mb-5 md:pb-0 md:mb-0;
		grid-template-areas:
			'image title title'
			'image title title'
			'image quantity total';
	}

	.cell {
		@apply md:table-cell md:border-b-2 md:py-3;

		&.delete {
			@apply absolute right-0 md:relative md:table-cell align-middle text-right;
		}

		&__hidden {
			@apply hidden md:table-cell;
		}
	}
}

.price,
.total {
	font-family: 'DINRoundPro';
	@apply font-bold text-2xl tracking-tighter;
}

input {
	font-family: 'DINRoundPro';
	@apply w-6 text-center text-xl;
}
</style>
