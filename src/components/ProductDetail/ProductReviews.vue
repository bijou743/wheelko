<script setup lang="ts">
import type { IProduct } from '@/interfaces/IProduct';
import { inject } from 'vue';

const { product } = defineProps<{
	product: IProduct;
}>();

const modalOpen = inject('modalOpen');
</script>

<template>
	<div>
		<h2>Отзывы</h2>

		<div v-if="product.reviews && product.reviews.length > 0">
			<div v-for="review in product.reviews" class="mb-10">
				<div class="flex mb-3 gap-5 items-center">
					<div class="name">{{ review.name }}</div>
					<div class="text-yellow-400 text-lg flex gap-0.5">
						<font-awesome-icon
							icon="fa-solid fa-star"
							v-for="n in review.mark"
						/>
						<font-awesome-icon
							icon="fa-regular fa-star"
							v-for="n in 5 - review.mark"
						/>
					</div>
				</div>

				<p>{{ review.text }}</p>
			</div>
		</div>

		<div v-else>
			<p class="mb-5">Отзывов пока нет. Оставьте первый!</p>
			<button type="button" class="btn" @click="modalOpen = true">
				оставить отзыв
			</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.name {
	font-family: 'DINRoundPro';
	@apply font-bold text-xl tracking-tighter;
}
</style>
