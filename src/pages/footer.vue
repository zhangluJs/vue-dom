<template>
  <div class="footer">
    <p>最终结束权归who所有？</p>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'nav',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  height: 50px;
  border-top: 1px solid #ccc;
  padding: 20px 0;
}
p {
  line-height: 24px;
  text-align: center;
}
</style>
