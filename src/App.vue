<template>
  <div id="app">
      <transition name="fade" mode="in-out">
        <router-view/>
      </transition>
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
      setTimeout(() => { this.getEvents(1) }, 2000)
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
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
