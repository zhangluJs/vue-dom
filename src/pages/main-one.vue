<template>
    <!--<div class="main">
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
    </div>-->
    <div class="guide">
        <el-row :gutter="20">
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    <ul class="side-bar">
                        <li v-for="(item, index) in barNav" @click="barClick(item, index)">
                            <a :href="item.src" v-bind:class="[item.active ? 'active' : '']">{{item.text}}</a>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="20">
                <div class="grid-content bg-purple-light">
                    <router-view></router-view>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'guide',
    data() {
        return {
            barNav: [{
                text: '设计原则',
                src: '#/zh-CN/guide/design',
                active: true
            }, {
                text: '导航',
                src: '#/zh-CN/guide/nav',
                active: false
            }],
            msg: 'Welcome to zhanglu`s house',
            value1: 0
        };
    },
    components: {
        'qui-button': require('../components/quiButton')
    },
    methods: {
        doSth(q) {
            console.log(this.msg);
        },
        barClick(item, index) {
            this.barNav.forEach(function (data) {
                data.active = false;
            });
            this.barNav[index].active = true;
        }
    },
    beforeCreate() {
        console.log('beforeCreate,组件实例刚被创建，组件属性计算之前,如data属性等' + this.msg);
    },
    created() {
        console.log('created,组件实例刚创建完成，属性已绑定' +  this.msg + '，但DOM还未生成，$el属性还不存在' +  this.$el);
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
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
/*.main {
    width: 800px;
    margin: 100px auto;
    overflow: hidden;
}

.ico {
    width: 10px;
    height: 10px;
}*/
.guide {
    width: 1140px;
    padding: 30px;
    margin: 0 auto;
}
.side-bar {
    li {
        list-style: none;
        text-align: left;
        a {
            font-size: 16px;
            color: #5e6d82;
            line-height: 40px;
            height: 40px;
            margin: 0;
            padding: 0;
            text-decoration: none;
            display: block;
            position: relative;
            transition: all .3s;
        }
    }
    .active {
        color: #20a0ff;
    }
}
</style>
