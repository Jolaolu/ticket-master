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
          <p class="event__details-description">
            Two-Time Grammy Award winner, Nathaniel Cole, who’s also just
            released an album, Into The Wild, will be having his first concert
            in Lagos, Nigeria!<br />
            Fans have waited so long for this announcement, and it promises to
            be everything anyone has imagined.
          </p>
          <h3 class="event__details-price">{{ article.price }}</h3>
          <div class="event__details-cta">
            <button class="event__details-cta-item">
              Buy Ticket
            </button>
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
              Eko Atlantic Beach, Off Ahmadu<br />
              Bello way, Victoria Island,<br />
              Lagos.
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
              Friday, February 8th 2019, 10:00pm
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
  min-height: 100vh;
  background-image: url("~@/assets/images/Lines.png");
  background-repeat: no-repeat;
  @include screen(med) {
    background-size: cover;
  }
  @include screen(large) {
    background-position: bottom 5px right 7px;
  }
  &__details {
    max-width: 1440px;
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
      font-family: "SF Display";
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
        padding: 1.2rem 5rem;
        @include screen(menner) {
          padding: 1.8rem 12rem;
        }
      }
    }
    &-address {
      & > .label {
        font-family: "SF Display";
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
      font-family: "SF Display";
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
      font-family: "SF Display";
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
</style>
