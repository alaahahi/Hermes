const homePage = () =>import ( '../components/pages/homePage.vue')
const companyPage = () =>import ( '../components/pages/companyPage.vue')
const discoverPage = () =>import ( '../components/pages/discoverPage.vue')

export default [
    {
        path: '/home',
        component: homePage,
        name: 'home',
    },
    {
        path: '/discover',
        component: discoverPage,
        name: 'discover',
    },
    {
        path: '/company',
        component: companyPage,
        name: 'company',
    },
]