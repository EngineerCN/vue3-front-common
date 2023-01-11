export default [
    {
        path: '/',
        name: 'pcHome',
        component: () => import('@/views/layout/index.vue'),
        children: [
            {
                path: '',
                name: 'pcMain',
                component: () => import('@/views/main/index.vue'),
            },
            {
                path: '/profile',
                name: 'profile',
                component: () => import('@/views/profile/index.vue'),
                // 标记当前的页面只有用户登录的时候才接入
                meta: {
                    user: true,
                },
            },
            {
                path: '/member',
                name: 'member',
                component: () => import('@/views/member'),
                meta: {
                    user: true,
                },
            },
        ],
    },
    {
        path: '/pins/:id',
        name: 'pins',
        component: () => import('@/views/pins/index.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/loginRegister/login'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/loginRegister/register'),
    },
];
