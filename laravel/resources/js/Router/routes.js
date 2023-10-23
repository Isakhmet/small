export const routes = [
    {
        name: 'login',
        path: '/login',
        meta: {requiresAuth: false},
        component: () => import('../components/Auth/Login.vue')
    },
    {
        name: 'registration',
        path: '/registration',
        meta: {requiresAuth: false},
        component: () => import('../components/Auth/Registration.vue')
    },
    {
        name: 'feedback',
        path: '/',
        meta: {requiresAuth: true},
        component: () => import('../components/Feedback/Show.vue')
    },
    {
        name: 'feedback.create',
        path: '/create',
        meta: {requiresAuth: true},
        component: () => import('../components/Feedback/Create.vue')
    }
]
