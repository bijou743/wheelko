<script setup lang="ts">
const subscribe = () => {
	alert('Подписка оформлена');
};
</script>

<template>
	<div
		class="my-20 bg-purple text-white text-center rounded-lg py-6 lg:px-16 px-8"
	>
		<h2>Подпишись &mdash; получи скидку на первый заказ!</h2>

		<form
			class="flex justify-center gap-5 mb-3 flex-col lg:flex-row"
			@submit.prevent="subscribe"
		>
			<input type="text" placeholder="Имя" required />
			<input type="email" placeholder="E-mail" required />
			<button type="submit" class="btn pink">подписаться</button>
		</form>

		<p>
			Подписавшиться, Вы соглашаетесь с
			<a href="">политикой конфиденциальности</a>
		</p>
	</div>
</template>

<style scoped lang="scss">
input {
	@apply bg-purple border-white border-2 rounded-md px-3 py-2 text-xl placeholder:text-white;
}

p {
	font-family: 'ProximaNova';
	@apply text-xs opacity-60;

	a {
		@apply underline;
	}
}
</style>
