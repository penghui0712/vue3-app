import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import Home from './../views/home.vue'
import Contact from './../views/contact.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;