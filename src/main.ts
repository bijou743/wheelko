import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faStar as star,
	faXmark,
	faPlus,
	faMinus,
	faDiceSix,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

library.add(star);
library.add(emptyStar);
library.add(faXmark);
library.add(faPlus);
library.add(faMinus);
library.add(faDiceSix);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());

app.use(router);

app.mount('#app');
