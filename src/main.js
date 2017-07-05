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

// console.log(store.state.a.count + ' %c   模块A的count', 'color:red');
// console.log(store.state.b.count + ' %c   模块B的count', 'color:red');
// console.log(store.state.count + ' %c   root的count', 'color:red');
// console.log(store.getters.maGetter + ' %c   模块A的getters', 'color:red');
// console.log(store.getters.mbGetter + ' %c   模块B的getters', 'color:red');
// store.commit('sayCountA'); // Module A count: 1
// store.commit('sayCountB'); // Module B count: 2
// store.dispatch('maAction');