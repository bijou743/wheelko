<script setup lang="ts">
const backcall = () => {
	alert('Обратный звонок заказан');
};
</script>

<template>
	<div>
		<h2>Обратный звонок</h2>
		<p class="mb-6 text-sm">
			Укажите ваше имя и номер телефона, и наши менеджера свяжутся с вами в
			ближайшее время.
		</p>
		<form
			class="flex flex-col items-center justify-center"
			@submit.prevent="backcall"
		>
			<input type="text" placeholder="Имя" required />

			<input type="tel" placeholder="Телефон" required />

			<button type="submit" class="btn">подтвердить</button>
		</form>
	</div>
</template>
