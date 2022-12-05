<script setup lang="ts">
import { useProductStore } from '@/stores/ProductStore';
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';

const productStore = useProductStore();

const { categories } = storeToRefs(productStore);

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}
</script>

<template>
	<footer class="bg-black py-10 self-end">
		<div class="container relative">
			<nav class="flex justify-between flex-wrap">
				<RouterLink to="/" class="hidden xl:block xl:basis-2/12 md:basis-1/4">
					<img src="../assets/logo.png" alt="Wheelko логотип" class="w-32" />
				</RouterLink>

				<div class="xl:basis-2/12 lg:basis-1/5 md:basis-1/3 basis-1/2">
					<p class="footer-title">Каталог</p>
					<ul class="footer-menu">
						<li>
							<RouterLink to="/catalog/games-of-week">Игры недели</RouterLink>
						</li>
						<li>
							<RouterLink to="/catalog/hit">Хиты продаж</RouterLink>
						</li>
						<li>
							<RouterLink to="/catalog/sale">Игры со скидками</RouterLink>
						</li>

						<li v-for="c in categories.slice(0, 2)" :key="c.id">
							<RouterLink :to="`/catalog/${c.id}`">{{ c.title }}</RouterLink>
						</li>
					</ul>
				</div>

				<div class="xl:basis-2/12 lg:basis-1/5 md:basis-1/3 basis-1/2">
					<p class="footer-title">&nbsp;</p>
					<ul class="footer-menu">
						<li v-for="c in categories.slice(2, 7)" :key="c.id">
							<RouterLink :to="`/catalog/${c.id}`">{{ c.title }}</RouterLink>
						</li>
					</ul>
				</div>

				<div class="xl:basis-2/12 lg:basis-1/5 lg:block hidden">
					<p class="footer-title">&nbsp;</p>
					<ul class="footer-menu">
						<li v-for="c in categories.slice(7)" :key="c.id">
							<RouterLink :to="`/catalog/${c.id}`">{{ c.title }}</RouterLink>
						</li>
					</ul>
				</div>

				<div
					class="xl:basis-2/12 lg:basis-1/5 md:basis-1/3 md:mt-0 w-full mt-6"
				>
					<p class="footer-title">Информация</p>
					<ul class="footer-menu columns-2 md:columns-1">
						<li>
							<RouterLink to="/delivery">Доставка</RouterLink>
						</li>
						<li>
							<RouterLink to="/payment">Оплата</RouterLink>
						</li>
						<li>
							<RouterLink to="/bonuses">Бонусы</RouterLink>
						</li>
						<li>
							<RouterLink to="/catalog">Каталог</RouterLink>
						</li>
						<li>
							<RouterLink to="/contacts">Контакты</RouterLink>
						</li>
					</ul>
				</div>

				<div
					class="self-end flex justify-end xl:basis-2/12 lg:basis-1/5 md:mt-12 mt-6"
				>
					<div>
						<div class="absolute md:top-0 bottom-0 right-0 cursor-pointer">
							<img
								src="../assets/icons/arrow_top.svg"
								alt="Наверх"
								@click="scrollToTop"
							/>
						</div>

						<p class="footer-phone">8 (8332) 73-11-94</p>
						<p class="text-white opacity-50 text-sm md:text-base">
							г. Киров, ул. Маклина, 53<br />
							вход со двора
						</p>
					</div>
				</div>
			</nav>

			<!-- footer bottom line -->
			<div class="flex text-white md:mt-12 mt-6 flex-wrap md:flex-nowrap">
				<div class="xl:basis-2/12 lg:basis-1/5 md:basis-1/3 w-full">
					<div>&copy; wheelko, 2014-2022</div>
				</div>

				<a
					href=""
					class="opacity-30 underline hover:no-underline hover:opacity-100 xl:basis-8/12 lg:basis-3/5 md:basis-1/3 w-full text-sm md:text-base"
				>
					Политика конфиденциальности
				</a>

				<div
					class="flex md:justify-end xl:basis-2/12 lg:basis-1/5 md:basis-1/3 w-full mt-6 md:mt-0"
				>
					<div class="flex gap-3">
						<a href="">
							<img src="../assets/icons/vk.png" alt="Мы во Вконтакте" />
						</a>
						<a href="">
							<img src="../assets/icons/facebook.png" alt="Мы в Facebook" />
						</a>
						<a href="">
							<img src="../assets/icons/instagram.png" alt="Мы в Instagram" />
						</a>
						<a href="">
							<img src="../assets/icons/ok.png" alt="Мы в Одноклассниках" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	font-family: 'ProximaNova', sans-serif;
}

.footer-title {
	@apply font-bold text-white text-xl mb-4;
	font-family: 'DINRoundPro';
}

.footer-menu {
	@apply text-white leading-loose text-sm md:text-base md:leading-loose;
	font-family: 'ProximaNova';

	a {
		@apply opacity-50;
	}

	a:hover {
		@apply underline opacity-100;
	}
}

.footer-phone {
	@apply font-bold text-white text-2xl mb-2;
	font-family: 'DINRoundPro';
}
</style>
