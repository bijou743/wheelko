<script setup lang="ts">
import { inject } from 'vue';

const modalType = inject('modalType');

const login = () => {
	alert('Вход');
};
</script>

<template>
	<div>
		<h2>Вход</h2>

		<form
			class="flex flex-col items-center justify-center"
			@submit.prevent="login"
		>
			<input type="email" placeholder="E-mail" required />

			<input type="password" placeholder="Пароль" required />

			<button type="submit" class="btn">войти</button>
		</form>

		<a href="#" class="bottom-link" @click="modalType = 'registrate'"
			>Регистрация</a
		>
	</div>
</template>
