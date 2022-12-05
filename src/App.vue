<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { useProductStore } from './stores/ProductStore';

const productStore = useProductStore();
productStore.getData();
</script>

<template>
	<Transition>
		<div
			v-if="productStore.loading"
			class="fixed top-0 bottom-0 right-0 left-0 bg-white flex justify-center items-center flex-col z-10"
		>
			<div class="flex">
				<div>
					<font-awesome-icon icon="fa-solid fa-dice-six" class="dice-icon" />
				</div>
			</div>
			<div class="mt-3 text-xl text-center">
				Достаём настолочки<br />из коробок...
			</div>
		</div>
	</Transition>

	<Header />

	<RouterView />

	<Footer />
</template>

<style scoped lang="scss">
.dice-icon {
	@apply text-7xl text-purple opacity-60;
	animation: dicejump 2s infinite alternate;
}

@keyframes dicejump {
	0% {
		@apply opacity-60;
		transform: rotate(0deg);
	}
	100% {
		@apply opacity-100;
		transform: rotate(360deg);
	}
}
</style>
