<template>
  <button  class="counter" @click="$emit('decrement')">
    <svg width="10" height="4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0a2 2 0 110 4H2a2 2 0 110-4h6z" fill="#828282" />
    </svg>
  </button>
</template>
<style lang="scss" scoped>
</style>
