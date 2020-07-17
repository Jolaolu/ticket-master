<template>
  <transition name="modal">
    <div class="loader-backdrop">
      <div
        class="loader-content"
      >
        <div
          class="loader"
        ></div>
        <p class="loader-text">Please wait</p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Loader',
  props: ['mode']
}
</script>
<style lang="scss" scoped>
.loader-backdrop {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  width: 350px;
  height: 350px;
  margin: -10rem auto 0;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.loader-content{
  color: $white;
}
.loader {
  border-radius: 100%;
  width: 3rem;
  margin: 0 auto;
  height: 3rem;
  border: 0.2rem solid $primary-color;
  border-top: 0.2rem solid $white;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
