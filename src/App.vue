<template>
  <div id="app">
    <i-nav></i-nav>
    <router-view></router-view>
    <i-footer></i-footer>
  </div>
</template>

<script>
import iNav from './pages/nav.vue';
import iFooter from './pages/footer.vue';
export default {
  name: 'app',
  components: {
    'i-nav': iNav,
    'i-footer': iFooter
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
