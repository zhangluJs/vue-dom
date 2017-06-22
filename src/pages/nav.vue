<template>
  <div class="nav">
    <div class="nav-main">
      <a href="" class="element-logo"><img src="../assets/element-logo.svg" alt=""></a>
      <div class="tab">
        <ul>
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
                src: '#/guide'
            }, {
                text: '组件',
                active: false,
                src: '#/main-two'
            }, {
                text: '资源',
                active: false,
                src: '#/main-three'
            }],
            languagetab: [{
                text: '中文',
                active: true
            }, {
                text: 'En',
                active: false
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
  .nav-main {
    width: 1140px;
    height: 80px;
    margin: 0 auto;
    padding: 0 30px;
    .tab {
      float: right;
    }
    ul {
      li {
        list-style: none;
        float: left;
        padding: 0 20px;
        text-decoration: none;
        display: block;
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
