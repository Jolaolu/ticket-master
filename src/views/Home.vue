<template>
  <div class="home container">
    <NavBar />
    <main class="events__page">
      <h1 class="events__page-hero">The best events happening now.</h1>
      <section id="events-list" class="events__page-listing">
        <article
          v-for="(event, index) in events"
          :key="index"
          class="events__page-listing-item"
        >
          <router-link
            role="link"
            :to="{
              name: 'EventDetailsView',
              params: { id: event.id, event: event }
            }"
          >
            <EventCard :event="event" />
          </router-link>
        </article>
        <!-- TODO:
          add conditional to check if articles exist, if not display a shimmer in its place
         -->
      </section>
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'EventsListingView',
  components: {
    EventCard: () => import('@/components/EventCard.vue')
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions(['getEvents'])
  },
  computed: mapGetters(['events']),
  mounted () {
    if (this.events.length < 1) {
      this.getEvents()
    }
  }
}
</script>
<style lang="scss">
.events__page {
  padding-top: 7.56rem;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 8rem;
  @include screen (med){
    min-height: 100vh;
  }
  @include screen(large) {
    height: 100%;
    padding-left: 10rem;
    padding-right: 10rem;
  }
  &-hero {
    font-weight: 900;
    margin-bottom: 2.5rem;
    font-size: 2rem;
    @include screen(menner) {
      line-height: 4rem;
      font-size: 3.6rem;
    }
    @include screen(medder) {
      margin-left: 3.3rem;
    }
  }
  &-listing {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @include screen(midder) {
      width: 100%;
    }
    @include screen(large) {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 1.5%;
      row-gap: 2%;
    }
    &-item {
      @include screen(small) {
        width: 100%;
      }
      @include screen(midder) {
        width: 35rem;
      }
    }
  }
}
</style>
