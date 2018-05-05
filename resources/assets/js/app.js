require('./bootstrap');

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import router from "./router.js"
import App from './components/App'
// import $ from 'jquery'

Vue.use(ElementUI)
Vue.prototype.$ajax = axios

const app = new Vue({
    el: '#app',
    router,
    components: {
        App
    }
});
