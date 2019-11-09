<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home.vue'
export default {
  components: {
    'Home': Home
  }
}
</script>

<style lang="scss">
@import '@/style/index.scss';
#app {
  height: 100%;
}
</style>
