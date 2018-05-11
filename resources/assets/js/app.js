require('./bootstrap');

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import router from "./router.js"
import App from './components/App'
import $ from 'jquery'
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue, {
    msgtime: 3,//目前只有一项，即msg方法的默认消失时间，单位：秒
});

Vue.use(ElementUI)
Vue.prototype.$ajax = axios

const app = new Vue({
    el: '#app',
    router,
    components: {
        App
    }
});
