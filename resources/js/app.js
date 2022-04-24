require('./bootstrap');
require('../sass/app.scss')
import Vue from 'vue'
import apps from './components/app.vue'
import headers from './components/header.vue'
import discover from './components/discover.vue'
import trend from './components/trend.vue'
import trendSearch from './components/trendSearch.vue'
import topTen from './components/topTen.vue'
import bestCompanyGroups from './components/bestCompanyGroups.vue'
import companyYouFollow from './components/companyYouFollow.vue'
import footers from './components/footers.vue'

window.Vue = require('vue');

// router
import router from './routes.js';
window.router = router;
window.Fire = new Vue();

const app = new Vue({
    el: '#app',
    router,
    components: {
        headers,
        discover,
        trend,
        bestCompanyGroups,
        topTen,
        companyYouFollow,
        trendSearch,
        footers
      },
}).$mount('#app');