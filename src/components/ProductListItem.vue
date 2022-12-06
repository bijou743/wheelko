<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { IProduct } from '../interfaces/IProduct';

const { product } = defineProps<{
	product: IProduct;
}>();
</script>

<template>
	<div class="product-item">
		<RouterLink :to="`/catalog/product/${product.id}`">
			<div
				class="product-item__image"
				:style="`background-image: url('${product.image}');`"
			>
				<div
					v-if="product.hit"
					class="product-item__badge product-item__badge--pink"
				>
					Хит
				</div>
				<div
					v-if="product.base"
					class="product-item__badge product-item__badge--green"
				>
					База
				</div>
				<div
					v-if="product.addition"
					class="product-item__badge product-item__badge--blue"
				>
					Доп
				</div>

				<div
					v-if="product.discountPrice"
					class="product-item__badge product-item__badge--pink"
				>
					%
				</div>
			</div>
			<div class="font-bold text-base mb-1">{{ product.title }}</div>
			<div
				v-if="product.reviews.length"
				class="text-gray-800 font-bold opacity-50 text-sm"
			>
				Отзывы: {{ product.reviews.length }}
			</div>
			<div v-else class="text-gray-800 font-bold opacity-50 text-sm">
				Пока нет отзывов
			</div>
			<div v-if="!product.discountPrice" class="product-item__price">
				{{ product.price }} Р
			</div>
			<div v-else class="flex">
				<div class="product-item__price product-item__price--crossed">
					{{ product.price }} Р
				</div>
				<div class="product-item__price ml-2">
					{{ product.discountPrice }} Р
				</div>
			</div>
		</RouterLink>
	</div>
</template>

<style lang="scss" scoped>
.product-item {
	@apply hover:scale-105 transition-all;

	&__image {
		@apply bg-gray-200 bg-blend-multiply w-full h-64 bg-[length:55%] bg-no-repeat bg-center rounded-lg mb-5 relative;
	}

	&__badge {
		font-family: 'DINRoundPro';
		@apply absolute uppercase  text-white font-bold rounded-2xl px-[5px] py-[4px] text-sm w-11 text-center;

		&:first-child {
			@apply top-4 right-3;
		}

		&:nth-child(2) {
			@apply top-12 right-3;
		}

		&:nth-child(3) {
			@apply top-20 right-3;
		}

		&--green {
			@apply bg-green;
		}

		&--blue {
			@apply bg-blue;
		}

		&--pink {
			@apply bg-pink;
		}
	}

	&__price {
		font-family: 'DINRoundPro';
		@apply font-bold text-2xl tracking-tighter mt-4;

		&--crossed {
			@apply line-through font-normal;
		}
	}
}
</style>
