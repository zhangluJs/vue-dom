<template>
    <div class="main">
        1111111111111111
        <p>将子组件的btnClickEvent事件传递到父组件doSth事件上</p>
        <p ref="p">{{msg}}</p>
        <span>这里会触发组件更新相关的钩子:<input type="text" v-model="msg"></span>
        <qui-button msg="下载" v-on:btnClickEvent="doSth">
            <img slot="icon" class="ico" src="../assets/logo.png" />
        </qui-button>
        <div class="block">
            <span class="demonstration">默认</span>
            <el-slider v-model="value1"></el-slider>
        </div>
    </div>
</template>
<script>
export default {
    name: 'nav',
    beforeCreate() {
        console.log('beforeCreate,组件实例刚被创建，组件属性计算之前,如data属性等'+ this.msg);
    },
    created() {
        console.log('created,组件实例刚创建完成，属性已绑定'+ this.msg+'，但DOM还未生成，$el属性还不存在'+ this.$el );
    },
    beforeMount() {
        console.log('beforeMount,模板编译/挂载之前');
    },
    mounted() {
        console.log('mounted,模板编译/挂载之后');
    },
    beforeUpdate() {
        console.log('beforeUpdate, 组件更新之前');
    },
    updated() {
        console.log('updated, 组件更新之后');
    },
    beforeDestroy() {
        console.log('beforDestory,组件被销毁之前');
    },
    destroyed() {
        console.log('destroyed,组件被销毁之后');
    },
    data() {
        return {
            msg: 'Welcome to zhanglu`s house',
            value1: 0
        }
    },
    components: {
        'qui-button': require('../components/quiButton')
    },
    methods: {
        doSth: function(q) {
            //console.log('点了这个按钮');
            console.log(this.msg);
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
    width: 800px;
    margin: 100px auto;
    overflow: hidden;
}

.ico {
    width: 10px;
    height: 10px;
}

.main thead tr th {
    background: #DDEFFA;
}

table th {
    white-space: nowrap;
}

table td {
    white-space: nowrap;
}

body,
table {
    font-size: 12px;
}

table {
    empty-cells: show;
    border-collapse: collapse;
    margin: 0 auto;
}

h1,
h2,
h3 {
    font-size: 12px;
    margin: 0;
    padding: 0;
}

.tab-css {
    border: 1px solid #cad9ea;
    color: #666;
}

.tab-css th {
    height: 30px;
}

.tab-css tr {
    position: relative;
}

.tab-css td,
.tab-css th {
    border: 1px solid #cad9ea;
    padding: 0 1em 0;
}

.tab-css tr.tr-css {
    background-color: #f5fafe;
    height: 30px;
}

.tab-css tr:nth-child(odd) td {
    background-color: #ECE9D8;
}

.fixed {
    position: absolute;
    background: #069DD5!important;
    color: #fff;
    width: 37px;
    height: 30px;
    line-height: 30px;
}

.td-empty {
    width: 60px;
    height: 30px;
    padding: 0!important;
    display: inline-block;
}
</style>
