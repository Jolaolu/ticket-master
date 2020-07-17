<template>
  <div class="event container">
    <NavBar />
    <main class="event__details" v-if="loading">
      <!-- <Loader/> -->
    </main>
    <main class="event__details" v-else>
      <section class="event__details-main">
        <div class="event__details-image-wrapper">
          <figure>
            <img
              v-if="event.image"
              class="event__details-image"
              :src="event.image"
              :alt="`${event.name} event`"
            />
            <img
              v-else
              class="event__details-image"
              :src="require('@/assets/images/event-image.png')"
              :alt="`${event.name} event`"
            />
          </figure>
        </div>
        <div class="event__details-content">
          <span class="event__details-date">{{
            format(event.start_time)
          }}</span>
          <h1 class="event__details-name">{{ event.name }}</h1>
          <p class="event__details-description">
            Two-Time Grammy Award winner, Nathaniel Cole, who’s also just
            released an album, <b> Into The Wild, </b>will be having his first
            concert in Lagos, Nigeria!<br />
            Fans have waited so long for this announcement, and it promises to
            be everything anyone has imagined.
          </p>
          <h3 class="event__details-price">
            <span v-if="event.tickets.length >= 1" class="">
              {{ getMinMax(event.tickets) }}
            </span>
          </h3>
          <div class="event__details-cta">
            <button
              v-if="event.tickets.length === 0"
              class="event__details-cta-item event__details-cta-item-free"
              @click="isFreeModalOpen = true"
            >
              REGISTER FOR FREE
            </button>
            <router-link
              v-else
              :to="{
                name: 'CartManagementView',
                params: { id: event.id, event: event }
              }"
              class="event__details-cta-item  event__details-cta-item-paid"
            >
              Buy Ticket
            </router-link>
          </div>
        </div>
      </section>
      <section class="event__details-others">
        <div class="event__details-address-wrapper">
          <div class="event__details-address">
            <p class="label">
              Venue
            </p>
            <p class="venue">
              {{ event.venue }}
            </p>
          </div>
          <div class="event__details-map">
            <span>
              <svg
                width="18"
                height="18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  clip-path="url(#clip0)"
                  stroke="#F5A623"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M.75 4.5v12l5.25-3 6 3 5.25-3v-12L12 4.5l-6-3-5.25 3zM6 1.5v12M12 4.5v12"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path fill="#fff" d="M0 0h18v18H0z" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p>View map for directions</p>
          </div>
        </div>
        <div class="event__details-misc">
          <div class="event__details-startdate-wrapper">
            <p class="event__details-startdate-label">DATE AND TIME</p>
            <p class="event__details-startdate">
              {{ formatdate(event.start_time) }}
            </p>
          </div>
          <div class="event__details-socials">
            <p class="event__details-socials-label">
              SOCIAL LINKS
            </p>
            <p class="event__details-socials-link">
              <router-link to="/" class="social-link">
                http://www.nathanielcole.com
              </router-link>
            </p>
            <p class="event__details-socials-link">
              <router-link to="/" class="social-link">
                http://www.nathanielcole.com
              </router-link>
            </p>
            <p class="event__details-socials-link">
              <router-link to="/" class="social-link">
                http://www.nathanielcole.com
              </router-link>
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <Modal
      :show="isFreeModalOpen"
      v-if="isFreeModalOpen"
      @close="isFreeModalOpen = false"
      class="modal-container"
    >
      <div v-if="!hasRegistered">
        <div class="form-header">
          <h3 class="checkout__summary-header">REGISTER FOR FREE</h3>
          <button @click="isFreeModalOpen = false">
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
          </button>
        </div>
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
          <div class="button-wrapper">
            <button
              class=""
              @click="register"
              :disabled="$v.$error || $v.$invalid"
            >
              REGISTER
            </button>
          </div>
        </article>
      </div>
      <article class="success__modal" v-else>
        <div class="success__modal-header">
          <button @click="isFreeModalOpen = false">
           <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <div class="success__modal-check">
      <div class="success__modal-check-icon">
        <svg
          width="137"
          height="137"
          viewBox="0 0 137 137"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="checkmark__circle"
            d="M125.583 63.2476V68.4993C125.576 80.8089 121.59 92.7864 114.22 102.646C106.849 112.505 96.4894 119.717 84.685 123.207C72.8806 126.698 60.2642 126.278 48.7174 122.013C37.1707 117.747 27.3122 109.862 20.6124 99.5359C13.9126 89.2093 10.7303 76.9937 11.5402 64.7108C12.3502 52.4279 17.1089 40.7358 25.1067 31.3784C33.1045 22.021 43.9128 15.4996 55.9197 12.7868C67.9267 10.074 80.4889 11.3151 91.7328 16.3251"
            stroke="#F5A623"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="checkmark__check"
            d="M125.583 22.8335L68.5 79.9739L51.375 62.8489"
            stroke="#F5A623"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      </div>
        <div class="success__modal-text">You have successfully registered for {{ event.name }}.</div>
      </article>
    </Modal>
  </div>
</template>
<script>
// import axios from axios
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import Modal from '@/components/Modal.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'EventDetailsView',
  props: ['id', 'eventData'],
  components: {
    Modal
  },
  data () {
    return {
      isFreeModalOpen: false,
      hasRegistered: false,
      isSuccessModalOpen: false,
      data: {
        name: '',
        email: '',
        phone: ''
      },
      event: {}
    }
  },
  mixins: [validationMixin],
  validations: {
    data: {
      name: { required },
      email: { required, email },
      phone: { required }
    }
  },
  watch: {

  },
  methods: {
    ...mapActions(['getEvents', 'registerFree']),
    register: function () {
      this.registerFree({ data: this.data, id: this.id })
      this.hasRegistered = true
    }
  },
  computed: {
    ...mapGetters(['events', 'loading'])
  },
  created () {
    const id = this.$route.params.id
    this.event = this.events.find(e => parseInt(e.id) === parseInt(id))
  }
}
</script>
<style lang="scss">
.event {
  min-height: 100vh;
  background-image: url("~@/assets/images/Lines.png");
  background-repeat: no-repeat;
  @include screen(med) {
    background-size: cover;
  }
  @include screen(large) {
    /* TODO:  fix LINES */
    background-position: bottom 5px right 7px;
    /* background-position: bottom 0 right 0; */
  }
  &__details {
    padding-top: 5.8rem;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-bottom: 3rem;
    @include screen(medder) {
      padding-top: 8em;
      padding-left: 15rem;
      padding-right: 15rem;
      padding-bottom: 16rem;
    }
    @include screen(larger) {
      padding-top: 5.64em;
      padding-left: 25rem;
      padding-right: 25rem;
    }
    &-main {
      display: flex;
      flex-direction: column;
      padding-bottom: 5rem;
      border-bottom: 1px solid #ccb7b1;
      margin-bottom: 2rem;
      @include screen(menner) {
        flex-direction: row-reverse;
        margin-bottom: 5rem;
      }
      @include screen(midder) {
        padding-top: 4rem;
      }
    }
    &-image {
      @include screen(menner) {
        height: 430px;
        object-fit: cover;
        border-radius: 6px;
      }
      @include screen(larger) {
      }
    }
    &-image-wrapper {
      flex-grow: 1;
      @include screen(menner) {
        width: 48%;
      }
    }
    &-content {
      flex-grow: 1;
      @include screen(menner) {
        width: 50%;
      }
    }
    &-date {
      color: $sub-color;
      text-transform: uppercase;
      font-family: $font-secondary;
      font-weight: 500;
      margin-top: 0.5rem;
      font-size: 1.2rem;
      @include screen(menner) {
        font-size: 1.8rem;
        line-height: 2.4rem;
      }
    }
    &-name {
      color: $sub-color;
      font-weight: 900;
      margin-bottom: 1.4rem;
      margin-top: 1rem;
      font-size: 2.2rem;
      @include screen(menner) {
        font-size: 3.6rem;
        line-height: 4rem;
      }
      @include screen(larger) {
        width: 28rem;
      }
    }
    &-description {
      font-family: $font-primary;
      color: $tertiary-color;
      font-style: italic;
      @include screen(menner) {
        font-size: 1.8rem;
        line-height: 2.8rem;
        width: 95%;
      }
    }
    &-price {
      margin-top: 1.4rem;
      font-size: 1.8rem;
      color: $text-color;
      @include screen(menner) {
        font-size: 2.4rem;
        margin-top: 2.9rem;
        line-height: 2.8rem;
      }
    }
    &-cta {
      width: 100%;
      display: flex;
      justify-content: center;
      @include screen(menner) {
        justify-content: start;
      }
      &-item {
        @include button;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
        letter-spacing: 0.05rem;
        text-transform: uppercase;
        border: 1px solid transparent;
        margin-top: 2rem;
        font-size: 1.4rem;
        line-height: 1.4rem;
        padding: 1.2rem 5rem;
        &-free {
          @include screen(menner) {
            padding: 1.8rem 10.4rem;
          }
        }
        &-paid {
          @include screen(menner) {
            padding: 1.8rem 13.15rem;
          }
        }
        &:visited {
          color: $white;
        }
      }
    }
    &-address {
      & > .label {
        font-family: $font-secondary;
        font-weight: 500;
        line-height: 2.4rem;
        text-transform: uppercase;
        color: $text-color;
        @include screen(med) {
          margin-top: 1.8rem;
        }
        @include screen(menner) {
          font-size: 1.8rem;
        }
      }
      & .venue {
        line-height: 2rem;
        font-size: 1.8rem;
        font-weight: bold;
        margin-top: 1.2rem;
        @include screen(menner) {
          font-size: 2.4rem;
          margin-top: 1.9rem;
          line-height: 3.2rem;
        }
      }
    }
    &-map {
      display: flex;
      color: $primary-color;
      margin-top: 1.4rem;
      @include screen(menner) {
        margin-top: 2.1rem;
      }
      & > span {
        margin-right: 1.6rem;
      }
      & > p {
        font-weight: bold;
        font-size: 1.6rem;
        @include screen(menner) {
          line-height: 1.8rem;
        }
      }
    }
    &-misc {
      @include screen(menner) {
        width: 50%;
      }
    }
    &-address-wrapper {
      @include screen(menner) {
        width: 50%;
      }
    }
    &-startdate-label {
      font-family: $font-secondary;
      font-weight: 500;
      line-height: 1.6rem;
      text-transform: uppercase;
      @include screen(mid) {
        margin-top: 1.8rem;
      }
      @include screen(menner) {
        font-size: 1.8rem;
        line-height: 2.4rem;
      }
    }
    &-startdate {
      line-height: 2rem;
      font-size: 1.8rem;
      font-weight: bold;
      margin-top: 1.2rem;
      @include screen(menner) {
        font-size: 2.4rem;
        margin-top: 2.2rem;
        line-height: 3.2rem;
      }
    }
    &-socials-label {
      font-family: $font-secondary;
      font-weight: 500;
      line-height: 1.6rem;
      margin-top: 1.6rem;
      margin-bottom: 1.6rem;
    }
    &-socials {
      &-link {
        color: $sub-color;
        margin-bottom: 1rem;
        line-height: 2rem;
        @include screen(menner) {
          font-size: 1.8rem;
        }
      }
    }
    &-others {
      padding-bottom: 3rem;
      @include screen(menner) {
        display: flex;
      }
      @include screen(midder) {
        padding-top: 5rem;
      }
    }
  }
  .social-link {
    color: $sub-color;
  }
}
.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid #bdbdbd;
  & button {
    border: 0;
    background-color: $white;
    outline: inherit;
    cursor: pointer;
  }
}
.success__modal{
  padding-top: 4rem;
  &-header{
    display: flex;
    justify-content: flex-end;
    & button{
      border: 0;
      background-color: $white;
    }
  }
  &-text{
    font-size: 1.3rem;
    line-height: 2.2rem;
    text-align: center;
    letter-spacing: 0.065rem;
    margin-top: 3rem;
    font-weight: bold;
    color: $black;
    @include screen (medder){
      font-size: 1.8rem;
      margin-top: 6.7rem;
    }
  }
  &-check-icon{
    display:  flex;
    justify-content: center;
  }
}
</style>
