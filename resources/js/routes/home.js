const homePage = () =>import ( '../components/pages/homePage.vue')
const login = () =>import ( '../components/pages/auth/login.vue')
const companyPage = () =>import ( '../components/pages/companyPage.vue')
const discoverPage = () =>import ( '../components/pages/discoverPage.vue')
const companyDetailsPage = () =>import ( '../components/pages/companyDetailsPage.vue')
const characterProfile = () =>import ( '../components/pages/characterProfile.vue')
const Public = () =>import ( '../components/layouts/public.vue')
const Protected = () =>import ( '../components/layouts/protected.vue')
const register = () =>import ( '../components/pages/auth/register.vue')
 

export default [
    {
        path: "/auth",
        component: Public,
        children: [
        {
                path: "/register",
                component: register ,
        },
          {
            path: "/Login",
            component: login,
          },
        ],
      },
      {
        path: "/",
        component: Protected,
        children: [
            {
                path: '/',
                component: homePage,
                name: 'home',
                meta: {
                    guest: true,
                    //requiresAuth: true
                }
            },
            {
                path: '/home',
                component: homePage,
                name: 'home',
                meta: {
                    guest: true,
                    //requiresAuth: true
                }
            },
            {
                path: '/discover',
                component: discoverPage,
                name: 'discover',
                meta: {
                    guest: true,
                }
            },
            {
                path: '/company',
                component: companyPage,
                name: 'company',
                meta: {
                    guest: true
                }
            },
            {
                path: '/companyDetail',
                component: companyDetailsPage,
                name: 'companyDetail',
                meta: {
                    guest: true
                }
            },
            {
                path: '/characterProfile',
                component: characterProfile,
                name: 'characterProfile',
                meta: {
                    guest: true
                }
            },
        ],
      },
]