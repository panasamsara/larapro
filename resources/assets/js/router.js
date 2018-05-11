import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./components/home";
import about from "./components/about";
import article from "./components/article";
import articleEdit from "./components/articleEdit";
import createArticle from "./components/createArticle"
import upload from "./components/upload"
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/home",
        component: home,
    },
    {
        path:"/article/:id",
        name: 'article',
        component: article,
        // children: [
        //     {
        //         path: '/article/edit/:id',
        //         name: 'articleEdit',
        //         component: articleEdit
        //     }
        // ]
    },
    {
        path:"/article/edit/:id",
        name: 'articleEdit',
        component: articleEdit
    },
    {
        path:"/create",
        name: 'create',
        component: createArticle
    },
    {
        path: "/upload",
        component: upload
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
