<template>
    <div class="nav">
        <div class="nav-main">
            <h1 class="nav-top-logo">
                <a href="">
                    <img src="../assets/element-logo.svg" alt="img">
                </a>
            </h1>
            <ul class="tab">
                <li v-for="(item, index) in items" @click="navClick(items, index)">
                    <a :href="item.src" v-bind:class="[item.active ? 'activite' : '']">{{item.text}}</a>
                </li>
                <li>
                    <span class="activite-len">中文</span>
                    <span>/</span>
                    <span>En</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            items: [{
                text: '指南',
                active: true,
                src: '#/zh-CN/guide/design'
            }, {
                text: '组件',
                active: false,
                src: '#/main-two'
            }, {
                text: '资源',
                active: false,
                src: '#/main-three'
            }]
        };
    },
    methods: {
        navClick(items, index) {
            this.items.forEach(function (el) {
                el.active = false;
            });
            this.items[index].active = true;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.nav {
    width: 100%;
    background: rgb(32, 160, 255);
    line-height: 80px;
    .nav-top-logo {
        margin: 0;
        float: left;
        font-size: 32px;
        font-weight: 400;
        line-height: 80px;
        a {
            color: #fff;
            text-decoration: none;
            display: block;
            line-height: 80px;
            img {
                vertical-align: sub;
            }
        }
    }
    .nav-main {
        width: 1140px;
        height: 80px;
        margin: 0 auto;
        padding: 0 30px;
        .tab {
            float: right;
            height: 100%;
            line-height: 80px;
            background: transparent;
            padding: 0;
            margin: 0;
            li {
                margin: 0;
                float: left;
                list-style: none;
                position: relative;
                cursor: pointer;
                margin-left: 20px;
                a {
                    opacity: .8;
                    cursor: pointer;
                    color: #fff;
                    line-height: 80px;
                    position: relative;
                }
                .activite{
                    font-weight: 600;
                    color: #fff;
                    opacity: 1;
                    &:before {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 4px;
                        background: #99d2fc;
                        left: 0;
                        bottom: 0;
                    }
                }
                span {
                    opacity: .8;
                    cursor: pointer;
                    color: #fff;
                    line-height: 80px;
                }
                .activite-len {
                    font-weight: 600;
                    color: #fff;
                    opacity: 1;
                }
            }
        }
    }
}
.element-logo {
    line-height: 80px;
    margin: 15px 0 0 50px;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col {
    border-radius: 4px;
    min-height: 1px;
}
.row-bg {
    padding: 10px 0;
}
</style>
