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

</style>
