/**
 * @file
 * @author
 */
import Vue from 'vue';
import Vuex from 'vuex';
// 如果是window引入方式，vuex会自动附加到Vue上。不需要注册
Vue.use(Vuex);

const state = {
    count: 0,
    items: [{
        text: 'Consistency',
        description: `Consistent with real life: in line with the process and logic of real life,
                        and comply with languages and habits that the users are used to.<br>Consistent
                        within interface: all elements should be consistent, such as: design style,
                        icons and texts, position of elements, etc.`,
        active: true
    }, {
        text: 'Feedback',
        description: `Operation feedback: enable the users to clearly perceive their operations by
                        style updates and interactive effects.<br>Visual feedback: reflect current
                        state by updating or rearranging elements of the page.`,
        active: false
    }, {
        text: 'Efficiency',
        description: `Simplify the process: keep operating process simple and intuitive.<br>Definite
                      and clear: enunciate your intentions clearly so that the users can quickly
                      understand and make decisions.<br>Easy to identify: the interface should be
                        straightforward, which helps the users to identify and frees them from memorizing
                        and recalling.`,
        active: false
    }, {
        text: 'Controllability',
        description: `Decision making: giving advices about operations is acceptable, but do not make decisions
                     for the users.<br>Controlled consequences: users should be granted the freedom to operate,
                      including canceling, aborting or terminating current operation.`,
        active: false
    }],
    description: ''
};

const getters = {
    isActive(state) {
        return state.items.filter(item => !item.active);
    },
    isActiveCount(state, getters) {
        return getters.isActive.length;
    }
};

const mutations = {
    increment(state, n) {
        state.count += n;
    },
    setItems(state, item) {
        state.items.push(item);
    },
    removeItems(state) {
        state.items.pop();
        state.description = '';
    },
    getdescription(state, num) {
        let index = num ? num : 0;
        state.description = state.items[index].description;
    }
};


// 接受一个与store实例具有相同方法和属性的context对象
const actions = {
    increment(context) {
        context.commit('increment', 12);
    },
    addItems(context, item) {
        if (item.text) {
            context.commit('setItems', item);
        }
    },
    actionA({commit}, n) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/a.json',
                type: 'get'
            }).then(res => {
                let data = JSON.parse(res);
                setTimeout(() => {
                    resolve(data);
                }, 3000);
            }, res => {
                reject(res);
            });
        });
    }
};

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});
