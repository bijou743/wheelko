<script setup lang="ts">
import SearchForm from './SearchForm.vue';
import AuthLinks from './AuthLinks.vue';
import SideMenu from './SideMenu.vue';

const { show } = defineProps<{
	show: boolean;
}>();
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
