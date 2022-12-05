<script setup lang="ts">
import type { IProduct } from '@/interfaces/IProduct';

const { product } = defineProps<{
	product: IProduct;
}>();
</script>

<template>
	<div>
		<h2>Комплектация</h2>
		<ul>
			<li>8 карт красных агентов</li>
			<li>8 карт синих агентов</li>
			<li>Карта двойного агента</li>
			<li>7 карт мирных жителей</li>
			<li>Карта убийцы</li>
			<li>40 карт ключей</li>
			<li>200 двухсторонних карт с кодовыми именами</li>
			<li>Правила игры</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
ul {
	@apply list-disc pl-4;

	li {
		@apply pl-1 mb-3;
	}
}
</style>
