<template>
  <div id="home">
    <div class="menu">
      <el-scrollbar>
        <ul>
          <li><router-link to="demo-001">demo-001</router-link></li>
          <li><router-link to="demo-002">demo-002</router-link></li>
        </ul>
      </el-scrollbar>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  height: 100%;
  .menu {
    padding: 10px;
    width: 200px;
    height: 100%;
    background-color: pink;
    li {
      margin-bottom: 5px;
    }
  }
  .body {
    flex: auto;
    padding: 10px;
  }
}
</style>
