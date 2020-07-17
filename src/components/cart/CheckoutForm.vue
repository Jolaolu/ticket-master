<template>
  <article class="form">
    <div class="form__item">
      <label class="form__item-label" for="name">Full name</label>
      <input
        class="form__item-input"
        type="text"
        v-model="data.name"
        :class="{ 'form__item-input-error': $v.data.name.$error }"
        @input="$v.data.name.$touch()"
      />
      <div v-if="$v.data.name.$error" class="form__item-warning">
        Name is required.
      </div>
    </div>
    <div class="form__item">
      <label class="form__item-label" for="email"> Email address</label>
      <input
        class="form__item-input"
        type="email"
        v-model.trim="data.email"
        :class="{ 'form__item-input-error': $v.data.email.$error }"
        @input="$v.data.email.$touch()"
      />
      <div v-if="$v.data.email.$error" class="form__item-warning">
        Email is required and should be a valid email.
      </div>
    </div>
    <div class="form__item">
      <label class="form__item-label" for="number">Phone number</label>
      <input
        type="text"
        class="form__item-input"
        v-model.trim="data.phone"
        @keypress="isNumber($event)"
        :class="{ 'form__item-input-error': $v.data.phone.$error }"
        @input="$v.data.phone.$touch()"
      />
      <div v-if="$v.data.phone.$error" class="form__item-warning">
        Phone number is required.
      </div>
    </div>
    <div>
      <div class="checkout__summary-details-item">
        <p class="total-label tof">Total payment</p>
        <p class="total-amount">N{{ localeString(total) }}</p>
      </div>
      <div class="button-wrapper">
        <button
          class=""
          @click="MakePayment"
          :disabled="$v.$error || $v.$invalid"
        >
          PAY N{{ localeString(total) }}
        </button>
      </div>
    </div>
  </article>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
      data: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  props: ['total', 'vat', 'subtotal', 'id'],
  mixins: [validationMixin],
  validations: {
    data: {
      name: { required },
      email: { required, email },
      phone: { required }
    }
  },
  methods: {
    ...mapActions(['createOrder']),
    MakePayment: function () {
      const tickets = {}
      this.tickets.map(t => {
        if (t.count >= 1) {
          tickets[t.id] = t.count
        }
      })
      const data = {
        ...this.data,
        base_amount: this.total,
        value_added_tax: this.vat,
        event_id: parseInt(this.id),
        tickets_bought: tickets
      }
      const flwKey = process.env.VUE_APP_FLUTTERWAVE_TEST_KEY
      window.FlutterwaveCheckout({
        public_key: flwKey,
        tx_ref: 'ticket-purchase-order' + new Date(),
        amount: this.total,
        currency: 'NGN',
        country: 'NG',
        payment_options: 'card',
        customer: {
          email: this.data.email,
          phone_number: this.data.phone,
          name: this.data.name
        },
        callback: function () {
          axios.post('orders', data)
            .then(response => {
              console.log(response)
              this.$toast.success(
                response.data.status,
                '',
                this.notificationSystem.options.success
              )
              this.$store.dispatch('clear')
              window.href = '/'
            })
            .catch(err => console.error(err))
        },
        onclose: function () {},
        customizations: {
          title: 'Inshallah and Vibes',
          description: 'Payment for Event Ticket'
        }
      })
    }
  },
  computed: {
    ...mapGetters(['tickets'])
  },
  created () {
    const script = document.createElement('script')
    script.src = 'https://checkout.flutterwave.com/v3.js'
    document.getElementsByTagName('head')[0].appendChild(script)
  }
}
</script>
<style lang="scss">
.tof {
  font-weight: bold;
}
</style>
