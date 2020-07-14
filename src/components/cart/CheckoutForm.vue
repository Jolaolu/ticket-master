<template>
  <article>
    <div>
      <label for="name">Full name</label>
      <input type="text" />
    </div>
    <div>
      <label for="email"> Email address</label>
      <input type="email" />
    </div>
    <div>
      <label for="number">Phone number</label>
      <input type="text" @keypress="isNumber($event)" />
    </div>
    <div>
      <div class="checkout__summary-details-item">
        <p class="total-label">Total payment</p>
        <p class="total-amount">N111,000</p>
      </div>
      <div class="button-wrapper">
        <button class="" >Continue</button>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
