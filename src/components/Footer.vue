<template>
  <footer class="footer">
    <div class="footer__copyright">
      <router-link to="/">
        Copyright 2019. Flutterwave inc
      </router-link>
    </div>
    <ul class="footer__info">
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
    </ul>
  </footer>
</template>
<style lang="scss">
  .footer {
    width: 100%;
    bottom:0;
    font-size: 1.4rem;
    color: $tertiary-color;
    padding: 0 5rem 3rem;
    @include screen (midder) {
      display: flex;
      justify-content: space-between;
    }
    &__info {
      & > li:last-child {
        @include screen (mid){
            margin-top: .7rem;
        }
      }
      & > li:first-child{
         @include screen (medder){
          margin-right: 3rem;
        }
      }
     @include screen (medder){
       display: flex;
       align-items: center;
      }
    }
  }
  .footer__copyright {
    margin-bottom: 2rem;
  }

</style>
