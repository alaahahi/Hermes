const homePage = () =>import ( '../components/pages/homePage.vue')
const companyPage = () =>import ( '../components/pages/companyPage.vue')
const discoverPage = () =>import ( '../components/pages/discoverPage.vue')
const companyDetailsPage = () =>import ( '../components/pages/companyDetailsPage.vue')
const characterProfile = () =>import ( '../components/pages/characterProfile.vue')

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
    {
        path: '/companyDetail',
        component: companyDetailsPage,
        name: 'companyDetail',
    },
    {
        path: '/characterProfile',
        component: characterProfile,
        name: 'characterProfile',
    },
]