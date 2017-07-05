<template>
    <div class="main">
        <div class="left">
            <qui-button msg="添加" @click.native="add()"></qui-button>
            <el-input v-model="input" placeholder="请输入内容" class="text"></el-input><br>
            <qui-button msg="删除" @click.native="remove()"></qui-button>
            <el-input type="textarea" v-model="content"  class="text content"></el-input>
        </div>
        <div class="right">
            <qui-nav></qui-nav>
            <description></description>
        </div>
        <p>未被选中的ActiveCount:{{isActiveCount}}</p>
    </div>
</template>

<script>
import {mapGetters, mapState, mapMutations} from 'vuex';
export default {
    name: 'nav',
    components: {
        'qui-button': require('../components/quiButton.vue'),
        'qui-nav': require('../components/quiNav.vue'),
        'description': require('../components/description.vue')
    },
    computed: {
    //     isActiveCount() {
    //         return this.$store.getters.isActiveCount;
    //     },
        ...mapGetters([
            'isActiveCount'
        ]),
        ...mapState([
            'count'
        ])
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            input: '',
            content: ''
        };
    },
    methods: {
        add() {
            // this.$store.dispatch('actionA').then(res => {
            //     this.$store.commit('setItems', res);
            // }, () => {
            //     alert('提交失败要做的事情');
            // });
            this.$store.commit('setItems', {text: this.input, active: false, description: this.content});
            this.input = '';
            this.content = '';
        },
        remove() {
            this.$store.commit('removeItems');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
    width: 1000px;
    height: 800px;
    margin: 20px auto;
    overflow: auto;
    border: 1px solid #ccc;
    padding: 10px;
}
.left {
    width: 350px;
    float: left;
    margin-right: 50px;
}
.right {
    width: 600px;
    float: left;
}
.text {
	width: 280px;
	margin-left: 20px;
    margin-bottom: 10px;
	float: left;
}
</style>
