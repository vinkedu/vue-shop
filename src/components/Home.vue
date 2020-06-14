<!--
 * @Author: your name
 * @Date: 2020-06-14 09:46:10
 * @LastEditTime: 2020-06-14 14:38:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_shop\src\components\Home.vue
-->
<style lang="less" scoped>
.Home {
}
</style>
<template>
  <div class="Home">
    <el-button type="info"
               @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mixins: [],
  components: {},
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    logout () {
      // 清除session中token
      window.sessionStorage.clear()
      // 路由回到登录页
      this.$router.push('/login')
    }
  },
  created () { },
  mounted () { }
}
</script>
