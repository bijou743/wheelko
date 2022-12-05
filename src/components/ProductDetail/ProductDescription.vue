<script setup lang="ts">
import type { IProduct } from '@/interfaces/IProduct';

const { product } = defineProps<{
	product: IProduct;
}>();
</script>

<template>
	<div>
		<h2>Описание</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia
			labore odit tempore sunt nam similique nemo explicabo incidunt pariatur!
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, facere, ut
			veniam blanditiis magni quidem beatae sit ex quo nobis nostrum vitae
			praesentium amet culpa molestiae repellat nisi, quae voluptatum? Lorem
			ipsum dolor sit amet, consectetur adipisicing elit. Esse, facere, ut
			veniam blanditiis magni quidem beatae sit ex quo nobis nostrum vitae
			praesentium amet culpa molestiae repellat nisi, quae voluptatum?
		</p>
	</div>
</template>

<style scoped>
p {
	@apply mb-4;
}
</style>
