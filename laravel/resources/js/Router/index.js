import {createWebHistory, createRouter} from "vue-router";
import {routes} from './routes';

const router = new createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.meta?.requiresAuth;
    const token = localStorage.getItem('token');

    if(requiresAuth && !token) {
        console.log('asd')
        console.log(requiresAuth)
        return next({
            name: 'login'
        })
    }

    if ((to.name === 'login' || to.name === 'registration') && token) {
        console.log('ddd')
        return next({
            name: 'feedback'
        })
    }

    next();
})

export default router;
