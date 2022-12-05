<script setup lang="ts">
import { useProductStore } from '@/stores/ProductStore';
import { RouterLink } from 'vue-router';
</script>

<template>
	<div>
		<div class="menu-item md:text-4xl tracking-tighter md:mb-5 text-base">
			<RouterLink to="/catalog">Каталог</RouterLink>
		</div>
		<nav class="text-gray-900 md:text-2xl text-base tracking-tighter">
			<ul class="leading-relaxed mb-4">
				<li class="menu-item">
					<RouterLink to="/catalog/games-of-week" class="text-black">
						Игры недели
					</RouterLink>
				</li>
				<li class="menu-item">
					<RouterLink to="/catalog/hit" class="text-black">
						Хиты продаж
					</RouterLink>
				</li>
				<li class="menu-item">
					<RouterLink to="/catalog/sale" class="text-black">
						Со скидками
					</RouterLink>
				</li>
				<li
					v-for="c in useProductStore().categories"
					:key="c.id"
					class="menu-item text-black md:text-gray-900"
				>
					<RouterLink :to="`/catalog/${c.id}`">{{ c.title }}</RouterLink>
				</li>
			</ul>
		</nav>
	</div>
</template>

<style lang="scss" scoped>
a {
	font-family: 'DINRoundPro', sans-serif;
}

a:hover {
	@apply hover:text-purple;
}

.router-link-exact-active {
	@apply text-purple;
}

.menu-item {
	@apply border-t-2 md:border-0 py-2 md:py-0;
}
</style>
