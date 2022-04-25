require('./bootstrap');
require('../sass/app.scss')
import Vue from 'vue'
import headers from './components/home/header.vue'
import footers from './components/home/footers.vue'

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
        footers
      },
}).$mount('#app');