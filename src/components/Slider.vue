<script lang="ts">
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/swiper.scss';

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Pagination, A11y],
		};
	},
};
</script>

<template>
	<div class="overflow-hidden w-full mb-16">
		<swiper
			:modules="modules"
			:slides-per-view="1"
			:pagination="{ clickable: true }"
			:loop="true"
		>
			<swiper-slide>
				<picture>
					<source
						srcset="../assets/img/slide-1-small.png"
						media="(max-width: 1159px)"
					/>

					<img src="../assets/img/slide-1.png" alt="" />
				</picture>
			</swiper-slide>
			<!-- <swiper-slide>
				<img src="../assets/img/photo-2.jpg" alt="" />
			</swiper-slide> -->
		</swiper>
	</div>
</template>

<style scoped lang="scss"></style>
