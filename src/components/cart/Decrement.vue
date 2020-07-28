<template>
  <button  class="counter" @click="$emit('decrement', id)">
   <img :src="require('@/assets/images/-.png')" alt="decrement item" srcset="">
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
  padding:0;
  -webkit-appearance: none;
}
</style>
