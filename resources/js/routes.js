import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './routes/home';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        ...home,
    ],
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.getItem("isLoggedIn")) {
            router.push("/login");
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem("isLoggedIn")) {
            next("/dashboard");
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;
