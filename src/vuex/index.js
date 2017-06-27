/**
 * @file
 * @author
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count: 0
};

const mutations = {
    increment(state) {
        state.count += 5;
    }
};

export default new Vuex.Store({
    state,
    mutations
});
