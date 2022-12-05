<script setup lang="ts">
const { open } = defineProps({
	open: Boolean,
	type: String,
});

const emits = defineEmits(['closeModal']);

const closeModal = () => {
	emits('closeModal');
};
</script>

<template>
	<div v-if="open" class="overlay" @click.self="closeModal">
		<div :class="`modal ${type}`">
			<font-awesome-icon
				icon="fa-solid fa-xmark"
				class="absolute text-2xl cursor-pointer right-5 top-4 opacity-50"
				title="Закрыть"
				@click="closeModal"
			/>

			<slot />
		</div>
	</div>
</template>

<style lang="scss">
.overlay {
	@apply fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-70 z-20 flex justify-center items-center;

	.modal {
		@apply bg-white rounded-lg p-8 text-center relative md:w-auto md:max-w-md w-[320px];

		&.login {
			@apply pb-20;
		}

		&.registrate {
			@apply pb-20;
		}

		.bottom-link {
			font-family: 'DINRoundPro';
			@apply rounded-b-lg bg-gray-900 w-full block absolute bg-opacity-50 bottom-0 left-0 py-3 tracking-tight text-gray-400 font-bold text-xl;
		}

		input {
			font-family: 'ProximaNova';
			@apply border-gray-300 py-2 px-3 border-2 rounded-sm mb-5 md:w-80 w-full;
		}

		textarea {
			@apply border-gray-300 py-2 px-3 border-2 rounded-sm mb-5 h-32 md:w-80 w-full;
		}
	}
}
</style>
