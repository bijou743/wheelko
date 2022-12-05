<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useProductStore } from '@/stores/ProductStore';
import BackCallModal from './Modals/BackCallModal.vue';
import Modal from './Modal.vue';
import SideMenuMobile from './SideMenuMobile.vue';
import SearchForm from './SearchForm.vue';
import AuthLinks from './AuthLinks.vue';

const productStore = useProductStore();

const backcallModalOpen = ref(false);
const sideMenuShow = ref(false);
</script>

<template>
	<header>
		<!-- header menu start -->
		<div class="header-menu bg-black py-4 hidden md:block">
			<div class="container flex justify-between items-center">
				<nav class="header-menu__nav">
					<RouterLink to="/delivery">Доставка</RouterLink>
					<RouterLink to="/payment">Оплата</RouterLink>
					<RouterLink to="/bonuses">Бонусы</RouterLink>
					<RouterLink to="/contacts">Контакты</RouterLink>
				</nav>

				<div class="header-menu__user flex gap-2 font-bold">
					<AuthLinks />
				</div>
			</div>
		</div>
		<!-- header menu end -->

		<!-- search panel start -->
		<div class="py-4 md:py-8 shadow-lg">
			<div
				class="container flex justify-between items-center"
				id="search-panel"
			>
				<div
					class="cursor-pointer block md:hidden relative"
					@click="sideMenuShow = !sideMenuShow"
				>
					<img src="../assets/icons/menu.png" alt="Открыть меню" />
				</div>

				<Teleport to="body">
					<SideMenuMobile :show="sideMenuShow" />
				</Teleport>

				<RouterLink to="/">
					<img
						src="../assets/logo.png"
						alt="Wheelko логотип"
						class="md:w-32 w-16"
					/>
				</RouterLink>

				<div class="lg:basis-2/6 basis-2/4 hidden md:block">
					<SearchForm />
				</div>

				<div class="hidden lg:block">
					<p class="font-bold text-2xl mb-1">8 (8332) 73-11-04</p>
					<a
						href="#"
						class="text-green underline hover:no-underline"
						@click.prevent="backcallModalOpen = true"
					>
						заказать звонок
					</a>

					<Teleport to="body">
						<Transition>
							<Modal
								:open="backcallModalOpen"
								type=""
								@close-modal="backcallModalOpen = false"
							>
								<BackCallModal />
							</Modal>
						</Transition>
					</Teleport>
				</div>

				<div class="leading-tight hidden lg:block">
					<p>пн &mdash; сб 10:00 - 20:00</p>
					<p>вс 10:00 - 18:00</p>
					<a href="/contacts" class="text-green underline hover:no-underline">
						адреса всех магазинов
					</a>
				</div>

				<div class="md:w-32 flex justify-end">
					<RouterLink to="/cart" class="cart">
						<img
							src="../assets/icons/cart.png"
							alt="Корзина"
							class="w-6 md:w-auto"
						/>
						<div class="cart__badge">{{ productStore.cart.length }}</div>
						<p class="font-bold text-lg hidden md:block">
							{{ productStore.calcCartTotalSum }} Р
						</p>
					</RouterLink>
				</div>
			</div>
		</div>
		<!-- search panel end -->
	</header>
</template>

<style lang="scss" scoped>
header {
	font-family: 'ProximaNova', sans-serif;
}
.header-menu {
	@apply text-white;

	&__nav {
		@apply flex gap-3;

		a {
			@apply opacity-50;
		}

		a:hover {
			@apply opacity-100;
		}
	}

	a:hover {
		@apply underline;
	}
}

.cart {
	@apply inline-flex justify-end items-center gap-5 relative;

	&__badge {
		@apply bg-purple absolute text-white rounded-full w-4 h-4 md:w-6 md:h-6 text-center top-0 left-4 md:left-5 text-xs md:text-sm leading-[17px] md:leading-[24px];
	}
}
</style>
