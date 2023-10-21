export const routes = [
    {
        name: 'user.login',
        path: '/user/login',
        meta: {requiresAuth: false},
        component: () => import('../components/Auth/Login.vue')
    },
    {
        name: 'user.registration',
        path: '/user/registration',
        meta: {requiresAuth: false},
        component: () => import('../components/Auth/Registration.vue')
    },
    {
        name: 'feedback',
        path: '/',
        meta: {requiresAuth: false},
        component: () => import('../components/Feedback/Show.vue')
    }
]
