<script setup lang="ts">
import { provide, ref, type Ref } from 'vue';
import type { IProduct } from '@/interfaces/IProduct';
import { useProductStore } from '@/stores/ProductStore';
import ProductDescription from './ProductDetail/ProductDescription.vue';
import ProductEquipment from './ProductDetail/ProductEquipment.vue';
import ProductReviews from './ProductDetail/ProductReviews.vue';
import Modal from './Modal.vue';
import ReviewFormModal from './Modals/ReviewFormModal.vue';

const productStore = useProductStore();

const { product } = defineProps<{
	product: IProduct | undefined;
}>();

// для переключения вкладок
type Content = 'desc' | 'equip' | 'review';

const contentType: Ref<Content> = ref('desc');

function changeContentType(type: Content) {
	contentType.value = type;
}

// определить класс для открытой вкладки
function getClass(type: Content) {
	return type === contentType.value ? 'text-purple' : 'text-gray-300';
}

// модальное окно для отзыва
const reviewModalOpen = ref(false);
provide('modalOpen', reviewModalOpen);
</script>

<template>
	<div>
		<div>
			<div
				v-if="product"
				class="flex md:gap-10 items-start flex-col md:flex-row"
			>
				<div class="lg:basis-3/5 md:basis-2/3 w-full">
					<div class="px-10 lg:w-[560px]">
						<img :src="`${product.image}`" :alt="`${product.title}`" />
					</div>
				</div>

				<div class="lg:basis-2/5 md:basis-1/3 w-full">
					<h1>{{ product.title }}</h1>

					<!-- Отзывы start -->
					<div
						v-if="product.reviews && product.reviews.length > 0"
						class="flex gap-3 justify-between items-end md:mb-8 mb-5"
					>
						<div class="mark">
							<font-awesome-icon
								icon="fa-solid fa-star"
								class="text-yellow-400 text-lg mr-2"
							/>
							<span>10 / 10</span>
						</div>

						<div class="font-bold text-gray-300 text-sm">
							Отзывов: {{ product.reviews.length }}
						</div>
						<a
							href="#"
							class="text-sm text-purple underline hidden lg:block"
							@click.prevent="reviewModalOpen = true"
							>Оставить отзыв</a
						>
					</div>

					<div v-else class="flex gap-10 items-end md:mb-8 mb-5">
						<div class="font-bold text-gray-300 text-sm">Пока нет отзывов</div>
						<a
							href="#"
							class="text-sm text-purple underline"
							@click.prevent="reviewModalOpen = true"
							>Оставить отзыв</a
						>
					</div>
					<!-- Отзывы end -->

					<!-- Характеристики start -->
					<div class="character">Игроков: 4-7 человек</div>
					<div class="character">Возраст: от 12 лет</div>
					<div class="character">Время: 20-40 минут</div>

					<!-- Характеристики end -->

					<!-- Цена start -->
					<div class="border-gray-200 border-t-2 pt-6 mb:mt-10 mt-7">
						<div v-if="!product.discountPrice" class="price">
							{{ product.price }} Р
						</div>
						<div v-else class="flex">
							<div class="price crossed">{{ product.price }} Р</div>
							<div class="price ml-4">{{ product.discountPrice }} Р</div>
						</div>

						<button
							v-if="!productStore.isProductInCart(product)"
							class="btn w-[265px]"
							@click="productStore.addToCart(product)"
						>
							Добавить в корзину
							<span class="plus">+</span>
						</button>

						<RouterLink to="/cart" class="btn green w-[265px]" v-else>
							Уже в корзине
						</RouterLink>
					</div>
					<!-- Цена end -->
				</div>
			</div>

			<div v-else>
				<h1>Упс...</h1>
				<p>Товар не найден.</p>
			</div>
		</div>

		<!-- Описание -->
		<div
			class="flex flex-col md:flex-row justify-between gap-16 lg:gap-0 border-gray-200 border-t-2 mt-10 pt-8 md:pt-16"
			v-if="product"
		>
			<ul class="menu hidden md:block">
				<li>
					<a
						href="#"
						@click.prevent="changeContentType('desc')"
						:class="getClass('desc')"
					>
						Описание
					</a>
				</li>
				<li>
					<a
						href="#"
						@click.prevent="changeContentType('equip')"
						:class="getClass('equip')"
					>
						Комплектация
					</a>
				</li>
				<li>
					<a
						href="#"
						@click.prevent="changeContentType('review')"
						:class="getClass('review')"
					>
						Отзывы
					</a>
				</li>
			</ul>

			<!-- --------------------- -->

			<ProductDescription
				v-show="contentType === 'desc'"
				class="content"
				:product="product"
			/>

			<ProductEquipment
				v-show="contentType === 'equip'"
				class="content"
				:product="product"
			/>

			<ProductReviews
				v-show="contentType === 'review'"
				class="content"
				:product="product"
			/>

			<ProductDescription class="content sm md:hidden" :product="product" />

			<ProductEquipment class="content sm md:hidden" :product="product" />

			<ProductReviews class="content sm md:hidden" :product="product" />

			<Teleport to="body">
				<Transition>
					<Modal :open="reviewModalOpen" @close-modal="reviewModalOpen = false">
						<ReviewFormModal />
					</Modal>
				</Transition>
			</Teleport>
		</div>
	</div>
</template>

<style scoped lang="scss">
.plus {
	@apply inline-block bg-white text-black lg:w-7 lg:h-7 w-7 h-7 rounded-full lg:text-2xl text-2xl leading-6 lg:leading-6 ml-2;
}

.mark {
	@apply bg-gray-100 rounded-md py-0 px-2;

	span {
		font-family: 'DINRoundPro';
		@apply font-bold text-base tracking-tighter;
	}
}

.character {
	font-family: 'DINRoundPro';
	@apply font-bold text-xl tracking-tighter lg:mb-5 mb-2;
}

.price {
	font-family: 'DINRoundPro';
	@apply font-bold lg:text-5xl text-4xl tracking-tighter mb-4;
}

.price.crossed {
	@apply font-normal line-through;
}

.menu {
	li {
		@apply mb-2;

		a {
			font-family: 'DINRoundPro';
			@apply font-bold  text-xl tracking-tighter;
		}
	}
}

.content {
	@apply md:basis-10/12 w-full hidden md:block;

	&.sm {
		@apply block md:hidden;
	}
}
</style>
