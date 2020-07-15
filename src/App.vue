<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
#app {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  font-family: $font-primary;
  color: $text-color;
}
</style>
