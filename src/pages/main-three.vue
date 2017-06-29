<template>
    <div class="main">
        <div class="left">
            <qui-button msg="添加" @click.native="add()"></qui-button>
            <el-input v-model="input" placeholder="请输入内容" class="text"></el-input><br>
            <qui-button msg="删除" @click.native="remove()"></qui-button>
            {{count.length}}
        </div>
        <div class="right">
            <qui-nav></qui-nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav',
    components: {
        'qui-button': require('../components/quiButton.vue'),
        'qui-nav': require('../components/quiNav.vue')
    },
    computed: {
        count () {
            return this.$store.state.items;
        }
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            input: ''
        };
    },
    methods: {
        add() {
            this.$store.commit('addItems', {text: this.input, active: false});
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
    width: 800px;
    height: 300px;
    margin: 100px auto;
    overflow: auto;
}
.left {
    width: 350px;
    float: left;
    margin-right: 50px;
}
.right {
    float: left;
}
.text {
	width: 200px;
	margin-left: 20px;
	float: left;
}
</style>
