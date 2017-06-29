/**
 * @file
 * @author
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count: 0,
    items: [{
        text: '首页',
        active: true
        // src: '#/main-two'
    }, {
        text: '列表',
        active: false
        // src: '#/main-two/main-two-two'
    }, {
        text: '关于',
        active: false
        // src: '#/main-two/main-two-three'
    }, {
        text: '招聘',
        active: false
        // src: '#/main-two/main-two-four'
    }]
};

const mutations = {
    increment(state) {
        state.count += 5;
    },
    addItems(state, item) {
        if (item.text) {
            state.items.push(item);
        }
    },
    removeItems(state) {
        state.items.pop();
    },
    navClickEvent(state, index) {
        state.items.forEach(function (el) {
            el.active = false;
        });
        state.items[index].active = true;
    }
};

export default new Vuex.Store({
    state,
    mutations
});
