<template>
  <main class="checkout">
    <section class="checkout__details">
      <button class="checkout__details-goback">
        <svg
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 4.5l-9 9M4.5 4.5l9 9"
            stroke="#333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>close</span>
      </button>
      <h1 class="checkout__details-event-name">The Nathan Cole Experience</h1>
      <span class="checkout__details-event-date">8th February 2019</span>
      <div class="checkout__details-tickets">
        <div class="checkout__details-tickets-item">
          <p class="checkout__details-tickets-item-type">Regular</p>
          <p class="checkout__details-tickets-item-amount">N5000</p>
          <div class="checkout__details-tickets-item-count">
            <Decrement /> <span> 2 </span> <Increment />
          </div>
        </div>
        <div class="checkout__details-tickets-item">
          <p class="checkout__details-tickets-item-type">Table for 5</p>
          <p class="checkout__details-tickets-item-amount">N1,000,000</p>
          <div class="checkout__details-tickets-item-count">
            <Decrement /> <span> 2 </span> <Increment />
          </div>
        </div>
        <div class="checkout__details-tickets-item">
          <p class="checkout__details-tickets-item-type">VIP</p>
          <p class="checkout__details-tickets-item-amount">N100,000</p>
          <div class="checkout__details-tickets-item-count">
            <Decrement /> <span> 2 </span> <Increment />
          </div>
        </div>
        <p class="checkout__details-tickets-info">
          Ticket sales ends on 22nd November 2019
        </p>
      </div>
    </section>
    <section class="checkout__summary">
      <h3 class="checkout__summary-header">
        Order summary
      </h3>
      <div class="checkout__summary-ticket-info-wrapper">
        <div class="checkout__summary-ticket-info">
          <p class="ticket-name">2 - Regular</p>
          <p class="ticket-total">N10,000</p>
        </div>
        <div class="checkout__summary-ticket-info">
          <p class="ticket-name">1 - VIP</p>
          <p class="ticket-total">N100,000</p>
        </div>
      </div>
      <div class="checkout__summary-details">
        <div class="checkout__summary-details-item">
          <p class="item-name">Sub-total</p>
          <p class="item-total">N110,000</p>
        </div>
        <div class="checkout__summary-details-item">
          <p class="item-name">VAT</p>
          <p class="item-total">N1000</p>
        </div>
        <div class="checkout__summary-details-item">
          <p class="total-label">Total payment</p>
          <p class="total-amount">N111,000</p>
        </div>
        <div class="button-wrapper">
          <button class="">Continue</button>
        </div>
      </div>
      <div class="money-back-wrapper">
        <svg
          width="26"
          height="26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.62 25.01l-1.846.828a1.857 1.857 0 01-2.265-.607l-1.185-1.64a.929.929 0 00-.658-.38l-2.013-.206a1.857 1.857 0 01-1.657-1.658l-.208-2.013a.929.929 0 00-.38-.658L.77 17.491a1.857 1.857 0 01-.607-2.265L.99 13.38a.929.929 0 000-.76l-.828-1.846A1.857 1.857 0 01.77 8.509l1.64-1.185a.929.929 0 00.38-.658l.207-2.013a1.857 1.857 0 011.657-1.657l2.013-.208a.929.929 0 00.658-.38L8.509.77a1.857 1.857 0 012.265-.607L12.62.99a.929.929 0 00.76 0l1.846-.828a1.857 1.857 0 012.265.607l1.185 1.64a.929.929 0 00.658.38l2.013.207c.875.09 1.567.782 1.657 1.657l.207 2.013a.929.929 0 00.38.658l1.64 1.185c.713.516.966 1.461.607 2.265l-.828 1.846a.928.928 0 000 .76l.828 1.846c.36.804.106 1.749-.607 2.265l-1.64 1.185a.929.929 0 00-.38.658l-.206 2.013a1.857 1.857 0 01-1.658 1.657l-2.013.207a.929.929 0 00-.658.38l-1.185 1.64a1.857 1.857 0 01-2.265.607l-1.846-.828a.928.928 0 00-.76 0zM7.983 11.243L6.407 12.82l5.29 5.29 8.122-8.12-1.576-1.577-6.546 6.546-3.714-3.715z"
            fill="#2D9CDB"
          />
        </svg>
        <div class="money-back">
          <p>100% customer protection</p>
          <span>Money back guarantee</span>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  components: {
    Increment: () => import('@/components/cart/Increment.vue'),
    Decrement: () => import('@/components/cart/Decrement.vue')
  }
}
</script>
<style lang="scss">
.checkout {
  background-color: $background-color;
  height: 100%;
  /* padding-left: 13.3rem; */
  padding: 2rem 3rem 0;
  &__details {
    &-goback {
      outline: inherit;
      box-shadow: -1px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 6rem;
      background-color: $white;
      border: 0;
      padding: 0.7rem 1.5rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
      & > span {
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 2.4rem;
        margin-left: 0.5rem;
      }
    }
    &-event-name {
      color: $sub-color;
      font-weight: 900;
      margin-bottom: 0.2rem;
      margin-top: 4rem;
      font-size: 2.2rem;
      @include screen(menner) {
        font-size: 3.6rem;
        line-height: 4rem;
        margin-top: 7.3rem;
      }
    }
    &-event-date {
      color: $secondary-color;
      font-family: "SF Display";
      font-weight: 500;
      margin-top: 0.5rem;
      font-size: 1.2rem;
      @include screen(menner) {
        font-size: 1.8rem;
        line-height: 2.4rem;
      }
    }
    &-tickets {
      margin-top: 5rem;
      color: $text-color;
      font-family: $font-primary;
      &-item {
        display: flex;
        justify-content: space-between;
        padding-bottom: 1.5rem;
        margin-bottom: 1.6rem;
        border-bottom: 1px solid #bdbdbd;
        &-count {
          width: 30%;
          display: flex;
          & > span {
            margin: 0 1.6rem;
          }
        }
        &-type {
          width: 25%;
        }
        &-amount {
          width: 35%;
        }
        &-count,
        &-amount {
          font-weight: bold;
          letter-spacing: 0.05rem;
          font-size: 1.7rem;
        }
      }
      &-info {
        color: #828282;
        font-size: 1.2rem;
        /* line-height: 2.8rem; */

        letter-spacing: 0.05rem;
      }
    }
  }
  &__summary {
    background: $white;
    padding: 3rem 1rem 5rem;
    &-header {
      text-transform: uppercase;
      color: $text-color;
      font-weight: bold;
      padding-bottom: 1rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid #bdbdbd;
    }
    &-ticket-info {
      display: flex;
      justify-content: space-between;
      font-size: 1.4rem;
      line-height: 1.7rem;
      margin-bottom: 1.5rem;
      & > .ticket-name {
        font-weight: bold;
        font-size: 1.4rem;
        color: $text-color;
        line-height: 1.7rem;
      }
      &-wrapper {
        padding-bottom: 8rem;
        border-bottom: 1px solid #bdbdbd;
        margin-bottom: 2rem;
      }
    }
    &-details {
      &-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.4rem;
        line-height: 1.7rem;
        font-family: $font-primary;
        margin-bottom: 1rem;
        & > .item-name {
          font-weight: bold;
        }
        & > .item-total {
          color: $secondary-color;
        }
        & > .total-label {
          text-transform: uppercase;
        }
        & > .total-amount {
          font-size: 2rem;
          font-weight: bold;
          line-height: 2.9rem;
        }
      }
      & > .button-wrapper {
        display: flex;
        justify-content: center;
        & > button {
          border: 0;
          padding: 1.2rem 5rem;
          @include button;
        }
      }
    }
    &> .money-back-wrapper{
      display: flex;
      align-items: center;
      margin-top: 2.7rem;
      & .money-back{
        margin-left: 1rem;
         letter-spacing: 0.05rem;
          line-height: 1.4rem;
        & p{
          font-weight: bold;
          font-size: 1.4rem;
        }
        &span{
          font-size: 1.3rem;
          color: #828282;
        }
      }
    }
  }
}
</style>
