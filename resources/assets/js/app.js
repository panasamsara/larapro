


require('./bootstrap');

import Vue from 'vue'
import ElementUI from 'element-ui'
import axios from 'axios'

import myIndex from './components/index'

Vue.use(ElementUI)
Vue.prototype.$ajax = axios

const app = new Vue({
    el: '#app',
    components: {
        myIndex
        
    }
});
