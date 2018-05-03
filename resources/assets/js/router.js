import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./components/home";
import about from "./components/about";
import article from "./components/article";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/home",
        component: home,
        // children: [
        //     {
        //         path: '/article/:id',
        //         name: 'article',
        //         component: article
        //     }
        // ]
    },
    {
        path:"/article/:id",
        name: 'article',
        component: article
    },
    {
        path: "/about",
        component: about
    },
    // 重定向
    {
        path: '/',
        redirect: '/home'
    }
]

var router =  new VueRouter({
    routes
})
export default router;
