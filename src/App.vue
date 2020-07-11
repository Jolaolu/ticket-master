<template>
  <div id="app">
    <div id="nav">
    <NavBar/>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
    NavBar: () => import('@/components/NavBar')
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
#app {
  width: 100%;
  font-family: $font-primary;
}
</style>
