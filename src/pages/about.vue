<template>
  <div>
    <div class="about">
        {{msg}}
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to zhanglu home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
