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
        <p class="total-amount">N{{localeString(total)}}</p>
      </div>
      <div class="button-wrapper">
        <button class="" :disabled="$v.$error || $v.$invalid">N{{localeString(total)}}</button>
      </div>
    </div>
  </article>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

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
  props: ['total'],
  mixins: [validationMixin],
  validations: {
    data: {
      name: { required },
      email: { required, email },
      phone: { required }
    }
  }
}
</script>
<style lang="scss">

.tof {
  font-weight: bold;
}
</style>
