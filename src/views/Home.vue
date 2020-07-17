<template>
  <div class="home container">
    <NavBar />
    <main class="events__page">
      <h1 class="events__page-hero">The best events happening now.</h1>
      <section v-if="loading">
        <Loader />
      </section>
      <transition v-else name="fade" mode="in-out">
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
                params: { id: event.id }
              }"
            >
              <EventCard :event="event" />
            </router-link>
          </article>
        </section>
      </transition>
      <div class="load__more" v-if="pageInfo && !loading">
        <button
          @click="loadMore"
          class="load__more-button"
          :show="pageInfo.totalPages > pageInfo.currentPage"
        >
          Show More
        </button>
        <button
          class="load__more-button"
          v-if="pageInfo.totalPages === pageInfo.currentPage"
        >
          Go to top
        </button>
      </div>
    </main>
    <Footer />
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
    return {
      page: 1
    }
  },
  methods: {
    ...mapActions(['getEvents']),
    loadMore: function () {
      this.getEvents(this.page + 1)
    }
  },
  computed: {
    ...mapGetters(['events', 'pageInfo', 'loading'])
  },
  created () {
    if (this.events.length <= 1) {
      setTimeout(() => {
        this.getEvents(this.page)
      }, 2000)
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
  @include screen(med) {
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
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1.5%;
      margin-bottom: 3rem;
    }
    &-item {
      @include screen(small) {
        width: 100%;
      }
      @include screen(midder) {
        width: 34rem;
        margin: 0 .5rem;
      }
      @include screen(medder){
         margin: 0 1rem;
      }
    }
  }
}
.load__more {
  width: 50%;
  margin: 0 auto;
  @include screen(medder) {
    width: 20%;
  }
  &-button {
    width: 100%;
    margin: 0 auto;
    background: transparent;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid $text-color;
    margin-bottom: 2rem;
    will-change: transform, background-color, color;
    transition: ease-in 0.5s all;
    &:hover {
      color: $white;
      transform: translate(0, -1px);
      background-color: $text-color;
    }
  }
}
</style>
