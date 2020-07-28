<template>
  <button class="counter" @click="$emit('increment', id)">
    <img :src="require('@/assets/images/+.png')" alt="increment item" srcset="">
  </button>
</template>
<script>
export default {
  props: ['id']
}
</script>
<style lang="scss" scoped>
.counter {
  box-sizing: border-box;
}
</style>
