<template>
  <transition name="modal">
    <div class="modal-backdrop" @click="$emit('close')">
      <div class="modal-item" @click.stop>
        <slot> </slot>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: ['show'],
  data: function () {
    return {}
  },
  mounted: function () {
    document.addEventListener('keydown', e => {
      if (this.show && e.keyCode === 27) {
        this.$emit('close')
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(51, 51, 51, 0.45);
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-item {
  width: 310px;
  height: 310px;
  margin: -10rem auto 0;
  padding-bottom: 2.8rem;
  border-radius: 15px;
  background-color: $white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
   padding: 0 2rem;
  @include screen(medder) {
     padding: 5rem 5.1rem 2rem;
    width: 470px;
    height: 584px;
  }
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
