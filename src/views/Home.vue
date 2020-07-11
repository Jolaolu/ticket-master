<template>
  <div class="home">
    <main class="event__page">
      <h1 class="event__page-hero">The best events happening now.</h1>
      <section id="events-list" class="event__page-listing">
        <article v-for="(article, index) in articles" :key="index" class="event__page-listing-item">
          <router-link to="/">
            <EventCard :article="article" />
          </router-link>
        </article>
        <!-- TODO:
          add conditional to check if articles exist, if not display a shimmer in its place
         -->
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import image from '@/assets/images/event-image.png'
export default {
  name: 'EventsListingView',
  components: {
    EventCard: () => import('@/components/EventCard.vue')
  },
  data () {
    return {
      articles: [
        {
          date: '8th February 2019',
          name: 'The Nathan Cole Experience',
          price: 'N5000 – N2,000,000',
          image: image
        },
        {
          date: '8th February 2019',
          name: 'The Nathan Cole Experience',
          price: 'N5000 – N2,000,000',
          image: image
        },
        {
          date: '8th February 2019',
          name: 'The Nathan Cole Experience',
          price: 'N5000 – N2,000,000',
          image: image
        },
        {
          date: '8th February 2019',
          name: 'The Nathan Cole Experience',
          price: 'N5000 – N2,000,000',
          image: image
        },
        {
          date: '8th February 2019',
          name: 'The Nathan Cole Experience',
          price: 'N5000 – N2,000,000',
          image: image
        },
        {
          date: '8th February 2019',
          name: 'The Nathan Cole Experience',
          price: 'N5000 – N2,000,000',
          image: image
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.event__page {
  padding-top: 7.56rem;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 8rem;
  &-hero {
    font-weight: 900;
    font-size: 3.6rem;
    line-height: 4rem;
    margin-bottom: 2.5rem;
  }
  &-listing {
    @include screen (mid) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @include screen (midder){
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
    }
    &-item{
      &:nth-child(even){
        @include screen(midder){
          margin-left: 2rem;
        }
      }
    }

    @include screen (large){
      display: grid;
      grid-template-columns: 30% 30% 30%;
    }
  }
}
</style>
