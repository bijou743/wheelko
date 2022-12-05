import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CatalogView from '../views/CatalogView.vue';
import ProductView from '../views/ProductView.vue';
import DeliveryView from '@/views/DeliveryView.vue';
import PaymentView from '@/views/PaymentView.vue';
import BonusesView from '@/views/BonusesView.vue';
import ContactsView from '@/views/ContactsView.vue';
import CartView from '@/views/CartView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/catalog',
			name: 'catalog',
			component: CatalogView,
		},
		{
			path: '/catalog/:id',
			name: 'category',
			component: CatalogView,
		},
		{
			path: '/catalog/product/:id',
			name: 'product',
			component: ProductView,
		},
		{
			path: '/delivery',
			name: 'delivery',
			component: DeliveryView,
		},
		{
			path: '/payment',
			name: 'payment',
			component: PaymentView,
		},
		{
			path: '/bonuses',
			name: 'bonuses',
			component: BonusesView,
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: ContactsView,
		},
		{
			path: '/cart',
			name: 'cart',
			component: CartView,
		},
	],
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 };
	},
});

export default router;
