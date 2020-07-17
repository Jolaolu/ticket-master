<template>
    <main class="checkout container">
      <section class="checkout__details">
        <button
          class="checkout__details-goback"
          @click.prevent="$router.go(-1)"
        >
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
          <span>Close</span>
        </button>
        <h1 class="checkout__details-event-name">{{ event.name }}</h1>
        <span class="checkout__details-event-date">
          {{ format(event.start_time) }}</span
        >
        <div class="checkout__details-tickets">
          <div
            class="checkout__details-tickets-item"
            v-for="(ticket, index) in newTickets"
            :key="index"
          >
            <p class="checkout__details-tickets-item-type">{{ ticket.name }}</p>
            <p class="checkout__details-tickets-item-amount">
              N{{ localeString(ticket.price) }}
            </p>
            <div class="checkout__details-tickets-item-count">
              <Decrement :id="ticket.id" @decrement="decrement" />
              <span> {{ ticket.count }} </span>
              <Increment @increment="increment" :id="ticket.id" />
            </div>
          </div>
          <p class="checkout__details-tickets-info">
            Ticket sales ends on 22nd November 2019
          </p>
        </div>
      </section>
      <section class="checkout__summary">
        <h3 class="checkout__summary-header">
          <span v-if="currentTabComponent !== 'Form'"> Order summary </span>
          <span v-else class="form" @click="currentTabComponent = ''">
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M12 19l-7-7 7-7"
                stroke="#333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span> Go back</span>
          </span>
        </h3>
        <div v-if="currentTabComponent === 'Form'">
          <keep-alive>
            <component :total="total" :vat="vat" :subtotal="subtotal" :id="event.id" :is="currentTabComponent"></component>
          </keep-alive>
        </div>
        <div class="" v-if="currentTabComponent !== 'Form'">
          <div class="checkout__summary-ticket-info-wrapper">
            <div
              class="checkout__summary-ticket-info"
              v-for="(ticket, index) in newTickets"
              :key="index"
            >
              <p class="ticket-name">{{ ticket.count }} - {{ ticket.name }}</p>
              <p class="ticket-total">N{{ localeString(ticket.price) }}</p>
            </div>
          </div>
          <div class="checkout__summary-details">
            <div class="checkout__summary-details-item">
              <p class="item-name">Sub-total</p>
              <p class="item-total">N{{ localeString(subtotal) }}</p>
            </div>
            <div class="checkout__summary-details-item">
              <p class="item-name">VAT</p>
              <p class="item-total">N1000</p>
            </div>
            <div class="checkout__summary-details-item">
              <p class="total-label">Total payment</p>
              <p class="total-amount">N{{ localeString(total) }}</p>
            </div>
            <div class="button-wrapper">
              <button class="" @click="currentTabComponent = 'Form'">
                Continue
              </button>
            </div>
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
import { mapGetters, mapActions } from 'vuex'
import Increment from '@/components/cart/Increment.vue'
import Decrement from '@/components/cart/Decrement.vue'
import Form from '@/components/cart/CheckoutForm.vue'
export default {
  components: {
    Increment,
    Decrement,
    Form
  },
  props: ['id'],
  data () {
    return {
      currentTabComponent: '',
      vat: 1000,
      event: {},
      newTickets: ''
    }
  },
  computed: {
    ...mapGetters(['tickets', 'events']),
    subtotal: function () {
      let total = 0
      this.newTickets.forEach(t => {
        total = total + t.count * t.price
      })
      return total
    },
    total: function () {
      const total = this.vat + this.subtotal
      return total
    }
  },
  methods: {
    ...mapActions(['incrementTicket', 'decrementTicket', 'setTickets']),
    increment: function (e) {
      this.incrementTicket(e)
      this.newTickets = this.event.tickets
    },
    decrement: function (e) {
      this.decrementTicket(e)
      this.newTickets = this.event.tickets
    }
  },
  watch: {

  },
  created () {
    const id = this.$route.params.id
    const event = this.events.find(e => parseInt(e.id) === parseInt(id))
    this.setTickets(event.tickets)
    this.event = event
  },
  mounted () {
    this.newTickets = this.event.tickets
  },
  updated () {
    this.newTickets = this.tickets
    console.log(this.tickets)
  }
}
</script>
<style lang="scss">
.checkout {
  background-color: $background-color;
  height: 100%;
  padding: 2rem 3rem 0;
  @include screen(menner) {
    padding: 0 0 0 2rem;
    display: flex;
    justify-content: space-between;
  }
  @include screen(large) {
    min-height: 130vh;
  }
  &__details {
    @include screen(menner) {
      padding-top: 3rem;
      width: 62%;
    }
    @include screen(large) {
      padding-left: 13.3rem;
      padding-right: 14.8rem;
      padding-top: 5rem;
      width: 67.4%;
    }
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
      @include screen(large) {
        padding: 1.24rem 2.9rem;
      }
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
      font-family: $font-secondary;
      margin-top: 0.5rem;
      font-size: 1.2rem;
      text-transform: uppercase;
      font-family: $font-tertiary;
      @include screen(menner) {
        font-size: 1.8rem;
        line-height: 2.4rem;
      }
    }
    &-tickets {
      margin-top: 5rem;
      color: $text-color;
      font-family: $font-primary;
      @include screen(large) {
        margin-top: 8.1rem;
      }
      &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 1.5rem;
        margin-bottom: 1.6rem;
        border-bottom: 1px solid #bdbdbd;
        @include screen(large) {
          padding-bottom: 2.5rem;
          margin-bottom: 2.1rem;
        }
        &:last-of-type {
          @include screen(large) {
            margin-bottom: 1.4rem;
          }
        }
        &-count {
          width: 30%;
          display: flex;
          @include screen(large) {
            width: 20%;
            justify-content: flex-end;
          }
          & > span {
            margin: 0 1.6rem;
          }
        }
        &-type {
          width: 25%;
          @include screen(large) {
            font-size: 2.4rem;
            line-height: 2.4rem;
          }
        }
        &-amount {
          width: 35%;
        }
        &-count,
        &-amount {
          font-weight: bold;
          letter-spacing: 0.05rem;
          font-size: 1.7rem;
          @include screen(large) {
            font-size: 2.4rem;
            line-height: 2.8rem;
            letter-spacing: 0.05rem;
          }
        }
      }
      &-info {
        color: #828282;
        font-size: 1.2rem;
        letter-spacing: 0.05rem;
        @include screen(large) {
          font-size: 1.4rem;
          line-height: 2.8rem;
        }
      }
    }
  }
  &__summary {
    background: $white;
    padding: 3rem 1rem 5rem;
    margin: 4rem 0;
    @include screen(menner) {
      margin: 0;
      width: 36%;
    }
    @include screen(large) {
      width: 32.64%;
      padding: 5rem 5.1rem 0;
    }
    &-header {
      @include header;
      & .form {
        display: flex;
        cursor: pointer;
        align-items: center;
        text-transform: capitalize;
        & svg {
          margin-left: 3px;
          &:hover {
            margin-right: 3px;
          }
          transition: transform 0.3s ease;
        }
        & span {
          &:hover {
            margin-left: 3px;
          }
          transition: transform 0.3s ease;
        }
      }
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
        @include screen(large) {
          padding-bottom: 17.9rem;
          margin-bottom: 3.4rem;
        }
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
        @include screen(menner) {
          margin-bottom: 2rem;
        }
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
          @include screen(large) {
            font-size: 2.4rem;
          }
        }
        &:last-of-type {
          @include screen(menner) {
            margin-bottom: 3rem;
          }
        }
      }
    }
    & > .money-back-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      @include screen(large) {
        justify-content: start;
      }
      margin-top: 2.7rem;
      & .money-back {
        margin-left: 1rem;
        letter-spacing: 0.05rem;
        line-height: 1.4rem;
        & p {
          font-weight: bold;
          font-size: 1.4rem;
        }
        & span {
          font-size: 1.3rem;
          color: #828282;
        }
      }
    }
  }
}
</style>
