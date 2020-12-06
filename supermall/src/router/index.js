import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/home.vue'

const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/shopcart',
    component: () =>
        import ('../views/cart/cart.vue')
}, {
    path: '/category',
    component: () =>
        import ('../views/category/category.vue')
}, {
    path: '/profile',
    component: () =>
        import ('../views/profile/profile.vue')
}, {
    path: '/detail/:iid',
    component: () =>
        import ('../views/detail/detail.vue')
}, {

}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router