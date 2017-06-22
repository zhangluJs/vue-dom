/**
 * @file 项目入口文件
 *
 * @author zhanglu
 * 2015年10月27日
 */

import Vue from 'vue';
import Router from 'vue-router';
import About from '@/pages/about';
import Info from '@/pages/info';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'main',
        component: require('../pages/main-one')
    }, {
        path: '/about',
        name: 'about',
        component: About,
        children: [{
            path: 'info',
            component: Info
        }]
    }, {
        path: '/zh-CN/guide',
        name: 'one',
        component: require('../pages/main-one'),
        children: [{
            path: '/zh-CN/guide/design',
            component: require('../pages/guide/design')
        }, {
            path: '/zh-CN/guide/nav',
            component: require('../pages/guide/nav')
        }]
    }, {
        path: '/main-two',
        name: 'two',
        component: require('../pages/main-two'),
        children: [{
            path: '/main-two',
            component: require('../pages/main-two-one')
        }, {
            path: '/main-two/main-two-two',
            component: require('../pages/main-two-two')
        }, {
            path: '/main-two/main-two-three',
            component: require('../pages/main-two-three')
        }, {
            path: '/main-two/main-two-four',
            component: require('../pages/main-two-two-four')
        }]
    }, {
        path: '/main-three',
        name: 'three',
        component: require('../pages/main-three')
    }]
});
