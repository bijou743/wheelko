<script setup lang="ts">
import Slider from '@/components/Slider.vue';
import SideMenu from '@/components/SideMenu.vue';
import ProductList from '@/components/ProductList.vue';
import Subscription from '@/components/Subscription.vue';
import Advantages from '@/components/Advantages.vue';
import { useProductStore } from '@/stores/ProductStore';

const productStore = useProductStore();
</script>

<template>
	<div class="container py-10 flex gap-x-14">
		<aside class="side-menu">
			<SideMenu />
		</aside>

		<main>
			<Slider />

			<ProductList
				title="Игры недели"
				:products="productStore.getGamesOfWeek"
			/>

			<Subscription />

			<ProductList title="Хиты продаж" :products="productStore.getPopular" />

			<div class="my-12 h-1 bg-gray-100"></div>

			<ProductList title="Игры со скидкой" :products="productStore.getSale" />

			<Advantages />

			<div class="text">
				<h1>SEO-текст никому не вредит</h1>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
					delectus saepe debitis nihil obcaecati quia expedita mollitia dolorem
					perspiciatis quos hic maxime sed molestias, temporibus non sequi
					quaerat eum impedit!
				</p>

				<ul>
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, et.
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
						delectus molestiae, autem perferendis repellat praesentium?
					</li>
					<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
				</ul>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
					corrupti impedit cum? Id aspernatur fugiat molestiae facere a
					reprehenderit nobis?
				</p>

				<ol>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
					<li>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
						ab velit voluptatem, debitis maxime soluta.
					</li>
					<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
				</ol>
			</div>
		</main>
	</div>
</template>
