


require('./bootstrap');

import Vue from 'vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueRouter from 'vue-router'

import myIndex from './components/index'
import myContent from './components/content'

Vue.use(VueRouter);
Vue.use(ElementUI)
Vue.prototype.$ajax = axios

let routes = [
  {path: '/', name: 'index', component: myIndex},
  {path: '/content', name: 'content', component: myContent}
];
let router = new VueRouter({
  'linkActiveClass': 'active',
   routes // （缩写）相当于 routes: routes
});

const app = new Vue({
    el: '#app',
    router,
    components: {
        myIndex

    }
});
