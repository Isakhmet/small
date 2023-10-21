import {createWebHistory, createRouter} from "vue-router";
import {routes} from './routes';
import useAuthStore from '../Store/modules/auth'

const router = new createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.meta?.requiresAuth;
    const authStore = useAuthStore;

    if(requiresAuth && !authStore.state.user?.name) {
        return next({
            name: 'user.login'
        })
    }

    next();
})

export default router;
