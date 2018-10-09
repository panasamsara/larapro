require('./bootstrap');

import Vue from 'vue'
import ElementUI from 'element-ui'
import { Loading } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import router from "./router.js"
import App from './components/App'
import $ from 'jquery'
import layer from 'vue-layer'

Vue.prototype.$layer = layer(Vue, {
    msgtime: 3,//目前只有一项，即msg方法的默认消失时间，单位：秒
});

/**此处开始 axios拦截器 数据加载时显示loading…… */
let loading        //定义loading变量
function startLoading() {    //使用Element loading-start 方法
    loading = Loading.service({
        lock: true,
        text: '拼命加载中……',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
function endLoading() {    //使用Element loading-close 方法
    loading.close()
}
//showFullScreenLoading() tryHideFullScreenLoading() 要干的事儿就是将同一时刻的请求合并。
//声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
//调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
let needLoadingRequestCount = 0
export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}
//http request 拦截器
// axios.interceptors.request.use(
//     config => {
//         showFullScreenLoading()
//         return config;
//     },
//     error => {
//         return Promise.reject(err);
//     }
// );
//http response 拦截器
// axios.interceptors.response.use(
//     response => {
//         tryHideFullScreenLoading()
//         return response;
//     },
//     error => {
//         return Promise.reject(error)
//     }
// );
/** axios拦截器 结束 */

// Vue.use(ElementUI)
Vue.prototype.$ajax = axios

const app = new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    mounted() {
        this.removeLoad()
    },
    methods: {
        removeLoad(){
            $('#beforeReady').css('display','none')
        }
    }
});
