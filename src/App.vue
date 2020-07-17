<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['getEvents'])
  },
  computed: {
    ...mapGetters(['events', 'pageInfo', 'loading'])
  },
  created () {
    if (this.events.length <= 1) {
      setTimeout(() => { this.getEvents() }, 2000)
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
#app {
  width: 100%;
  min-height: 100vh;
  font-family: $font-primary;
  color: $text-color;
}
</style>
