<script setup lang="ts">
import { watch, type Ref, inject } from 'vue';
import { useRoute } from 'vue-router';
import SearchForm from './SearchForm.vue';
import AuthLinks from './AuthLinks.vue';
import SideMenu from './SideMenu.vue';

defineProps({
	show: Boolean,
});

const emits = defineEmits(['closeSideMenu']);

const route = useRoute();

watch(
	() => route.path,
	async () => {
		emits('closeSideMenu');
	}
);
</script>

<template>
	<Transition>
		<div
			v-if="show"
			class="md:hidden absolute top-14 flex justify-center w-full z-10 bg-white py-4 shadow-md"
		>
			<div class="container">
				<div>
					<SearchForm />
				</div>

				<div>
					<AuthLinks />
				</div>

				<div>
					<SideMenu />
				</div>
			</div>
		</div>
	</Transition>
</template>

<style scoped lang="scss"></style>
