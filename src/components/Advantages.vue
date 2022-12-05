<template>
	<div class="advantages">
		<div class="advantages__item advantages__item--purple">
			<img src="../assets/icons/fast-delivery.png" alt="Быстрая доставка" />
			Быстрая доставка
		</div>
		<div class="advantages__item advantages__item--green">
			<img src="../assets/icons/easy-payment.png" alt="Удобная оплата" />
			Удобная оплата
		</div>
		<div class="advantages__item advantages__item--pink">
			<img
				src="../assets/icons/working-every-day.png"
				alt="Работаем каждый день"
			/>
			Работаем каждый день
		</div>
	</div>
</template>

<style scoped lang="scss">
.advantages {
	@apply bg-gray-100 flex flex-col lg:flex-row my-20 rounded-lg py-10 lg:items-center lg:justify-around gap-6 lg:gap-0 lg:px-16 px-14;

	&__item {
		font-family: 'DINRoundPro';
		@apply flex font-bold text-xl lg:text-2xl tracking-tighter gap-4 items-center lg:w-[200px] lg:leading-tight leading-none;

		img {
			@apply w-8;
		}

		&--purple {
			@apply text-purple;
		}

		&--green {
			@apply text-green;
		}

		&--pink {
			@apply text-pink;
		}
	}
}
</style>
