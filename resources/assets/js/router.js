import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
// import home from "./components/home";
// import about from "./components/about";
// import article from "./components/article";
// import articleEdit from "./components/articleEdit";
// import createArticle from "./components/createArticle"

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/home",
        component: ()=>import('./components/home'),
    },
    {
        path:"/article/:id",
        name: 'article',
        component: ()=>import('./components/article')
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
        component: ()=>import('./components/articleEdit')
    },
    {
        path:"/create",
        name: 'create',
        component: ()=>import('./components/createArticle')
    },
    {
        path: "/about",
        component: ()=>import('./components/about')
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
