<script setup lang="ts">
import ProductListItem from './ProductListItem.vue';
import type { IProduct } from '@/interfaces/IProduct';

const { title } = defineProps<{
	title: string | undefined;
	products: IProduct[];
}>();
</script>

<template>
	<div>
		<h2 v-if="title">{{ title }}</h2>

		<div class="grid gap-8 lg:grid-cols-3" v-if="products.length > 0">
			<ProductListItem v-for="p in products" :product="p" :key="p.id" />
		</div>
		<div v-else>Товары не найдены.</div>
	</div>
</template>

<style lang="scss" scoped></style>
