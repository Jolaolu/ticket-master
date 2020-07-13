<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__wrapper-copyright">
        <router-link to="/" class="footer__wrapper-copyright-link">
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
  width: 100%;
  display: flex;
  justify-content: center;
  &__wrapper {
    max-width: 1440px;
    width: 100%;
    bottom: 0;
    font-size: 1.4rem;
    font-family: "SF Display";
    font-weight: 500;
    color: $tertiary-color;
    padding: 0 3rem 3rem;
    letter-spacing: 0.0028px;
    @include screen(medder) {
      display: flex;
      justify-content: space-between;
      padding: 0 24rem 4rem;
    }
    &-info {
      @include screen(mid) {
        margin-top: 2rem;
      }
      font-family: "SF Display";
      font-weight: 500;
      & > li:last-child {
        @include screen(mid) {
          margin-top: 2rem;
        }
      }
      & > li:first-child {
        @include screen(midder) {
          margin-right: 3rem;
        }
        @include screen(large) {
          margin-right: 4.8rem;
        }
      }
      @include screen(medder) {
        display: flex;
        align-items: center;
      }
    }
    &-copyright {
      &-link {
        color: $tertiary-color;
        font-family: "SF Display";
        font-weight: 500;
      }
    }
  }
}
</style>
