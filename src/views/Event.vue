<template>
  <div class="event">
    <NavBar />
    <main class="event__details">
      <section>
        <div>
          <figure>
            <img :src="article.image" :alt="`${article.name} event`" />
          </figure>
        </div>
        <div>
          <span class="event__details-date">{{ article.date }}</span>
          <h1 class="event__details-name">{{ article.name }}</h1>
          <p class="event__details-description">
            Two-Time Grammy Award winner, Nathaniel Cole, who’s also just
            released an album, Into The Wild, will be having his first concert
            in Lagos, Nigeria! Fans have waited so long for this announcement,
            and it promises to be everything anyone has imagined.
          </p>
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
  background-image: url("~@/assets/images/Lines.png");
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: right; */
  &__details {
    max-width: 1440px;
    @include screen(mid) {
      padding: 5rem;
    }
    &-date {
      color: $sub-color;
      font-family: "SF Display";
      font-weight: 500;
      @include screen(mid) {
        font-size: 1.2rem;
      }
    }
    &-name {
      color: $sub-color;
    }
  }
}
</style>
