<script setup lang="ts">
import { ref, type Ref, watch } from 'vue';
import type { IProduct } from '@/interfaces/IProduct';
import { useProductStore } from '@/stores/ProductStore';
import { getImgSrc } from '../global/index';

const productStore = useProductStore();

let searchPhrase = ref('');
let searchResults: Ref<IProduct[]> = ref([]);

watch(searchPhrase, async (newSearchPhrase) => {
	if (newSearchPhrase) {
		searchResults.value = productStore.searchGamesByName(newSearchPhrase);
	} else {
		searchResults.value = [];
	}
});
</script>

<template>
	<div class="relative mb-4 md:mb-0">
		<form>
			<input
				type="text"
				placeholder="Более 2000 товаров!"
				class="text-black bg-gray-200 py-3 md:py-4 px-5 w-full rounded-full outline-none text-sm md:text-base"
				v-model="searchPhrase"
			/>
			<button
				type="submit"
				title="Найти"
				class="absolute right-4 md:right-5 top-3 md:top-1/3"
			>
				<img src="../assets/icons/search-btn.png" alt="Найти" />
			</button>
		</form>

		<div v-if="searchResults.length > 0" class="search-results">
			<div v-for="p in searchResults" class="search-results__item">
				<RouterLink :to="`/catalog/product/${p.id}`" @click="searchPhrase = ''">
					<img :src="getImgSrc(p.image)" :alt="p.title" class="w-10" />
				</RouterLink>

				<RouterLink :to="`/catalog/product/${p.id}`" @click="searchPhrase = ''">
					{{ p.title }}
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.search-results {
	@apply absolute bg-white z-10 w-full p-3 grid rounded-lg shadow-xl top-11 md:top-16;

	&__item {
		@apply flex items-center gap-2 border-b-[1px] mb-3 pb-3;
	}

	&__item:last-child {
		@apply mb-0 pb-1 border-0;
	}
}
</style>
