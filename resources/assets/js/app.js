


require('./bootstrap');

import Vue from 'vue'
import Example from './components/Example'
import myHeader from './components/myheader'


// Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app',
    components: {
        Example,
        myHeader
        
    }
});
