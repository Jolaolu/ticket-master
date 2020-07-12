<template>
  <div class="event">
    <NavBar />
    <main class="event__details">
      <section class="event__details-main">
        <div class="event__details-image-wrapper">
          <figure>
            <img
              class="event__details-image"
              :src="article.image"
              :alt="`${article.name} event`"
            />
          </figure>
        </div>
        <div class="event__details-content">
          <span class="event__details-date">{{ article.date }}</span>
          <h1 class="event__details-name">{{ article.name }}</h1>
          <em class="event__details-description">
            Two-Time Grammy Award winner, Nathaniel Cole, who’s also just
            released an album, Into The Wild, will be having his first concert
            in Lagos, Nigeria! Fans have waited so long for this announcement,
            and it promises to be everything anyone has imagined.
          </em>
          <h3 class="event__details-price">{{article.price}}</h3>
          <button class="event__details-cta">
            Buy Ticket
          </button>
        </div>
      </section>
      <section>
        <div></div>
        <div>
          <label for="address">
            Venue
          </label>
          <address>
            Eko Atlantic Beach, Off Ahmadu Bello way, Victoria Island, Lagos.
          </address>
          <div>
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
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
export default {
  name: 'EventDetailsView',
  props: ['id', 'article']
}
</script>
<style lang="scss">
.event {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  background-image: url("~@/assets/images/Lines.png");
  background-repeat: no-repeat;
  @include screen (mid){
      background-size: cover;
  }
  @include screen (menner) {
    background-size: contain;
    background-position: right;
  }
  &__details {
    max-width: 1440px;
    @include screen(mid) {
      padding-top: 5.8rem;
      padding-left: 3rem;
      padding-right: 3rem;
    }
    @include screen(menner) {
      padding-top: 5.64em;
      padding-left: 25rem;
      padding-right: 25rem;
    }
    &-main {
       display: flex;
      flex-direction: column;
      padding-bottom: 5rem;
      border-bottom: 1px solid #CCB7B1;
      @include screen(menner) {
        flex-direction: row-reverse;
      }
    }
    &-image-wrapper {
      flex-grow: 1;
      @include screen (menner) {
        width: 50%;
      }
    }
    &-content {
       flex-grow: 1;
      @include screen (menner) {
        width: 50%;
      }
    }
    &-date {
      color: $sub-color;
      font-family: "SF Display";
      font-weight: 500;
      @include screen(mid) {
        margin-top: .5rem;
        font-size: 1.2rem;
      }
    }
    &-name {
      color: $sub-color;
      margin-bottom: 1.4rem;
      @include screen(mid) {
        margin-top: 1rem;
        font-size: 2.2rem;
      }
    }
    &-description{
      font-family: $font-primary;
    }
    &-price{
      font-size: 2.4rem;
      margin-top: 1.4rem;
      @include screen (medder){
        margin-top: 2.9rem;
      }
    }
    &-cta{
      @include button;
      border: none;
      width: 100%;
      margin-top:2rem;
      font-size: 1.4rem;
      font-weight: bold;
      letter-spacing: 0.05rem;
      padding: 1.8rem 12rem;
    }
  }
}
</style>
