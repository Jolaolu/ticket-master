<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__wrapper-copyright">
        <router-link to="/">
          Copyright 2019. Flutterwave inc
        </router-link>
      </div>
      <ul class="footer__wrapper-info">
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  </footer>
</template>
<style lang="scss">
.footer {
  display: flex;
  justify-content: center;
  &__wrapper {
    max-width: 1440px;
    width: 100%;
    bottom: 0;
    font-size: 1.4rem;
    color: $tertiary-color;
    padding: 0 5rem 3rem;
    @include screen(mid) {
      display: flex;
      justify-content: space-between;
    }
    @include screen(medder) {
      display: flex;
      justify-content: space-between;
    }
    @include screen(large) {
      padding: 0 24rem 4rem;
    }
    &-info {
      & > li:last-child {
        @include screen(mid) {
          margin-top: 0.7rem;
        }
      }
      & > li:first-child {
        @include screen(medder) {
          margin-right: 3rem;
        }
      }
      @include screen(medder) {
        display: flex;
        align-items: center;
      }
    }
    &-copyright {
      @include screen(mid) {
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
