<script setup lang="ts">
import { inject } from 'vue';

const modalType = inject('modalType');

const registrate = () => {
	alert('Регистрация');
};
</script>

<template>
	<div>
		<h2>Регистрация</h2>
		<form
			class="flex flex-col items-center justify-center"
			@submit.prevent="registrate"
		>
			<input type="email" placeholder="E-mail" required />

			<div class="flex justify-between w-full flex-col md:flex-row">
				<input type="text" placeholder="Имя" class="md:!w-36" required />

				<input type="text" placeholder="Фамилия" class="md:!w-40" required />
			</div>

			<input type="password" placeholder="Пароль" required />

			<input type="password" placeholder="Повторите пароль" required />

			<button type="submit" class="btn">зарегистрироваться</button>
		</form>

		<a href="#" class="bottom-link" @click="modalType = 'login'">Войти</a>
	</div>
</template>
