require('./bootstrap');

import Vue from 'vue'
import ElementUI from 'element-ui'
import axios from 'axios'

import router from "./router.js"
import App from './components/App'

Vue.use(ElementUI)
Vue.prototype.$ajax = axios

const app = new Vue({
    el: '#app',
    router,
    components: {
        App
    }
});
