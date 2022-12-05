<script setup lang="ts">
import { ref } from 'vue';

const mark = ref(5);

// изменить оценку при нажатии на звездочку
const changeMark = (event: Event) => {
	let star = event.target as HTMLElement;

	if (star.nodeName !== 'svg') {
		star = star.parentElement!;
	}

	mark.value = parseInt(star.dataset.mark!);
};
</script>

<template>
	<div>
		<h2>Оставить отзыв</h2>

		<form class="flex flex-col items-center justify-center">
			<input type="hidden" v-model="mark" />

			<div class="text-yellow-400 text-xl flex gap-0.5 mb-4 justify-center">
				<font-awesome-icon
					icon="fa-rsolid fa-star"
					v-for="n in +mark"
					class="cursor-pointer icon-default"
					:data-mark="n"
					@click="changeMark"
				/>

				<font-awesome-icon
					icon="fa-regular fa-star"
					v-for="n in 5 - mark"
					class="cursor-pointer icon-default"
					:data-mark="n + mark"
					@click="changeMark"
				/>
			</div>

			<input type="text" placeholder="Ваше имя" />

			<textarea placeholder="Отзыв"></textarea>

			<button type="submit" class="btn">отправить отзыв</button>
		</form>
	</div>
</template>
