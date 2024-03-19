import { createRouter, createWebHistory } from 'vue-router';
// Define lazy-loaded components using dynamic imports
const WelcomePage = () => import(/* webpackChunkName: "WelcomePage" */ '@/components/componentPages/WelcomePage.vue');
const ShoppingList = () => import(/* webpackChunkName: "ShoppingList" */ '@/components/componentPages/ShoppingList.vue');
const ProductDetails = () => import(/* webpackChunkName: "ProductDetails" */ '@/components/componentPages/ProductDetails.vue');
const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: WelcomePage
  },
  {
    path: '/product-list',
    name: 'ShoppingList',
    component: ShoppingList
  },
  {
    path: '/product-spec', // Assuming you want to keep this route path
    name: 'ProductDetails',
    component: ProductDetails
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
