<script setup lang="ts">
import { ref, type Ref, provide } from 'vue';
import Modal from './Modal.vue';
import LoginModal from './Modals/LoginModal.vue';
import RegistrateModal from './Modals/RegistrateModal.vue';

type ModalType = 'login' | 'registrate' | null;

const modalType: Ref<ModalType> = ref(null);
const modalOpen = ref(false);

const closeModal = () => {
	modalType.value = null;
	modalOpen.value = false;
};

provide('modalType', modalType);
</script>

<template>
	<div class="mb-4 md:mb-0">
		<a
			href="#"
			@click.prevent="
				modalType = 'registrate';
				modalOpen = true;
			"
		>
			Регистрация
		</a>
		|
		<a
			href="#"
			@click.prevent="
				modalType = 'login';
				modalOpen = true;
			"
		>
			Вход
		</a>

		<Teleport to="body">
			<Transition>
				<Modal
					:open="modalOpen && modalType === 'registrate'"
					type="registrate"
					@close-modal="closeModal"
				>
					<RegistrateModal />
				</Modal>
			</Transition>
		</Teleport>

		<Teleport to="body">
			<Transition>
				<Modal
					:open="modalOpen && modalType === 'login'"
					type="login"
					@close-modal="closeModal"
				>
					<LoginModal />
				</Modal>
			</Transition>
		</Teleport>
	</div>
</template>

<style scoped lang="scss">
* {
	font-family: 'ProximaNova', sans-serif;
}

a {
	@apply text-purple md:text-white font-bold;

	&:first-child {
		@apply mr-4 md:mr-2;
	}

	&:last-child {
		@apply ml-4 md:ml-2;
	}
}
</style>
