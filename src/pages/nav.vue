<template>
  <div class="nav">
      <a
        v-for="(item, index) in items"
        :href="item.src"
        @click="navClick(items, index)"
        v-bind:class="[item.active ? 'activites' : '']"
      >{{item.text}}</a>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        {
          text: '导航一',
          active: true,
          src: '#/main-one'
        },{
          text: '导航二',
          active: false,
          src: '#/main-two'
        },{
          text: '导航三',
          active: false,
          src: '#/main-three'
        }
      ]
    }
  },
  methods: {
    navClick(items, index) {
      this.items.forEach(function(el) {
        el.active = false;
      })
      this.items[index].active = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  width: 100%;
  height: 50px;
  background: #20a0ff;
}
a {
  width: 33%;
  height: 100%;
  line-height: 49px;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  opacity: .8;
}
.activites {
  border-bottom: 1px solid #000;
  color: #fff;
}
</style>
