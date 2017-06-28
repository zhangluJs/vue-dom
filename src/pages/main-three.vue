<template>
    <div class="main">
        <div class="left">
            <qui-button msg="vuex"></qui-button>
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
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
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
</style>
