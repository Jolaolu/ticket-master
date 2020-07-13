<template>
  <button @click="$emit('increment')">
    <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 4.99a.91.91 0 01-.91.91H8.007c-1.1 0-1.993.893-1.993 1.993v1.082a1.025 1.025 0 11-2.049 0V7.883a1.983 1.983 0 00-1.982-1.982H.91a.91.91 0 110-1.821h1.073a1.983 1.983 0 001.982-1.983V1.025a1.025 1.025 0 012.05 0v1.062c0 1.1.892 1.993 1.992 1.993H9.09a.91.91 0 01.91.91z"
        fill="#828282"
      />
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
