<script setup lang="ts">
import { useProductStore } from '@/stores/ProductStore';
import ProductDetail from '../components/ProductDetail.vue';

const productStore = useProductStore();
</script>

<template>
	<div class="container py-10 flex gap-10">
		<main class="flex-grow">
			<ProductDetail :product="productStore.getGameById($route.params.id)" />
		</main>
	</div>
</template>

<style scoped lang="scss"></style>
