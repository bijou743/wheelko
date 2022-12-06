<template>
	<div class="container py-10 flex gap-10">
		<aside class="hidden lg:block basis-1/4"></aside>

		<main class="w-full lg:w-auto lg:basis-3/4">
			<h1>Контакты</h1>

			<iframe
				class="w-full h-[400px] mb-10 md:mb-20 mt-10"
				src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaf50014d375d6c5c9b6bf4a449dc0aa42c684cbb6c98db8c3a06b393fcb90a09&amp;source=constructor"
				frameborder="0"
			></iframe>

			<div class="flex justify-between flex-col md:flex-row">
				<div class="mb-10 md:mb-0">
					<h3>Магазин на Маклина</h3>

					<p class="mb-5">
						Киров, ул. Маклина, 53 (вход со двора, цокольный этаж)
					</p>

					<p class="mb-5">
						Пн-Сб 10:00-20:00<br />
						Вс 10:00-18:00
					</p>

					<p>
						8 (8332) 73-11-04<br />
						<a href="mailto:info@wheelko.ru">info@wheelko.ru</a>
					</p>
				</div>

				<div>
					<iframe
						class="w-[360px] h-[206px]"
						src="https://www.youtube.com/embed/rQAyNqDE9vk"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</main>
	</div>
</template>
