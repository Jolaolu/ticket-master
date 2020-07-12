<template>
  <div class="home">
    <NavBar/>
    <main class="events__page">
      <h1 class="events__page-hero">The best events happening now.</h1>
      <section id="events-list" class="events__page-listing">
        <article v-for="(article, index) in articles" :key="index" class="events__page-listing-item">
          <router-link role="link" :to="{name: 'EventDetailsView', params:{ id: article.id, article:article }}">
            <EventCard :article="article" />
          </router-link>
        </article>
        <!-- TODO:
          add conditional to check if articles exist, if not display a shimmer in its place
         -->
      </section>
    </main>
    <Footer/>
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
          id: 1,
          date: '8th February 2019',
          name: 'The Nathan Cole Experience',
          price: 'N5000 – N2,000,000',
          image: image
        },
        {
          id: 2,
          date: '8th February 2019',
          name: 'The Nathan Cole Experience',
          price: 'N5000 – N2,000,000',
          image: image
        },
        {
          id: 3,
          date: '8th February 2019',
          name: 'The Nathan Cole Experience',
          price: 'N5000 – N2,000,000',
          image: image
        },
        {
          id: 4,
          date: '8th February 2019',
          name: 'The Nathan Cole Experience',
          price: 'N5000 – N2,000,000',
          image: image
        },
        {
          id: 5,
          date: '8th February 2019',
          name: 'The Nathan Cole Experience',
          price: 'N5000 – N2,000,000',
          image: image
        },
        {
          id: 6,
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
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.events__page {
   min-height: 100vh;
  max-width: 1440px;
  padding-top: 7.56rem;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 8rem;
  @include screen (large) {
    padding-left: 10rem;
    padding-right: 10rem;
  }
  &-hero {
    font-weight: 900;
    margin-bottom: 2.5rem;
    font-size: 2rem;
    @include screen (menner){
      line-height: 4rem;
      font-size: 3.6rem;
    }
    @include screen (medder){
      margin-left: 3.3rem;
    }
  }
  &-listing {
    @include screen (mid) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    @include screen (midder){
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
    }
    @include screen (large){
      width: 100%;
      display: grid;
      grid-template-columns: 31% 31% 31%;
      column-gap: 3%;
      row-gap: 2%;
    }
    @include screen(larger){
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &-item{
      @include screen(small){
        width: 100%;
      }
      @include screen (midder){
        width: 35rem;
      }
    }
  }
}
</style>
