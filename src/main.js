/**
 * @file
 * @author
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex';
import ElementUI from 'element-ui';
import $ from 'jquery';
import 'element-ui/lib/theme-default/index.css';
window.$ = $;
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});

store.commit('getdescription');



console.log(store.getters.isActive);
console.log(store.getters.isActiveCount);
console.log(store.state.count);