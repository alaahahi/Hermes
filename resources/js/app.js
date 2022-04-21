require('./bootstrap');
require('../sass/app.scss')
import Vue from 'vue'
import apps from './components/app.vue'
import { Carousel, Slide } from 'vue-carousel';
import slickcarousel from './components/slickcarousel'

window.Vue = require('vue');

// router
import router from './routes.js';
window.router = router;
window.Fire = new Vue();

const app = new Vue({
    el: '#app',
    router,
    components: {
        apps,
        Carousel,
    Slide,
    slickcarousel

      },
}).$mount('#app');