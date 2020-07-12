<template>
  <main class="checkout">
    <section class="checkout__details">
      <button class="checkout__details-goback">
        <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>close</span>
      </button>
      <h1 class="checkout__details-event-name">The Nathan Cole Experience</h1>
    </section>
    <section class="checkout__summary"></section>

  </main>
</template>
<style lang="scss">
.checkout{
  background-color: $background-color;
  height: 100%;
  /* padding-left: 13.3rem; */
  padding: 2rem 3rem 0;
  &__details{

    &-goback{
      box-shadow: -1px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 6rem;
      background-color: $white;
      border:0;
      padding: .7rem 1.5rem;
      display: flex;
      align-items: center;
      & > span{
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 2.4rem;
        margin-left: .5rem;
      }
    }
    &-event-name{
      color: $sub-color;
      font-weight: 900;
      margin-bottom: 1.4rem;
      margin-top: 4rem;
      font-size: 2.2rem;
      @include screen (menner){
        font-size: 3.6rem;
        line-height: 4rem;
        margin-top: 7.3rem;
      }
    }
  }
}
</style>
