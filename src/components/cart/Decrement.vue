<template>
  <button @click="$emit('decrement')">
    <svg width="10" height="4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0a2 2 0 110 4H2a2 2 0 110-4h6z" fill="#828282" />
    </svg>
  </button>
</template>
<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: $white;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.25);
}
</style>
