<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue';
import { useProductStore } from '@/stores/ProductStore';
import ProductList from '../components/ProductList.vue';

const productStore = useProductStore();
</script>

<template>
	<div class="container py-10 flex gap-10">
		<aside class="side-menu">
			<SideMenu />
		</aside>

		<main>
			<ProductList
				v-if="$route.params.id && $route.params.id === 'games-of-week'"
				title=""
				:products="productStore.getGamesOfWeek"
			/>

			<ProductList
				v-else-if="$route.params.id && $route.params.id === 'hit'"
				title=""
				:products="productStore.getPopular"
			/>

			<ProductList
				v-else-if="$route.params.id && $route.params.id === 'sale'"
				title=""
				:products="productStore.getSale"
			/>

			<ProductList
				v-else-if="$route.params.id"
				title=""
				:products="productStore.getGamesByCategory($route.params.id)"
			/>

			<ProductList v-else title="" :products="productStore.products" />
		</main>
	</div>
</template>

<style lang="scss" scoped></style>
