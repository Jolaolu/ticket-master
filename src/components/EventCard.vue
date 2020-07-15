<template>
  <div class="event__card">
    <figure class="event__card-image">
      <div v-if="'loading'"></div>
      <img
        v-if="event.image"
        class="event__card-image-item"
        :src="event.image"
        :alt="`${event.name} event`"
      />
      <img v-else class="event__card-image-item" :src="require('@/assets/images/event-image.png')" alt="" />
    </figure>
    <p class="event__card-date">{{ format(event.start_time) }}</p>
    <h3 class="event__card-name">{{ event.name }}</h3>
    <p class="event__card-price">
      <span
        class="free"
        v-if="event.is_free || Object.keys(event.tickets).length === 0"
      >
        Free
      </span>
      <span class="sold" v-else-if="event.is_sold_out">Sold out</span>
      <span v-else> {{ getMinMax(event.tickets) }}</span>
    </p>
  </div>
</template>
<script>
export default {
  props: ['event'],
  methods: {}
}
</script>
<style lang="scss">
.event__card {
  cursor: pointer;
  margin-bottom: 3rem;
  &-image {
    margin-bottom: 1.9rem;
    &-item {
      height: 231px;
      border-radius: 6px;
      width: max-content;
      object-fit: cover;
    }
  }
  &-date {
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-family: $font-secondary;
    font-weight: 500;
    color: $secondary-color;
  }
  &-name {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 2.2rem;
    margin-top: 0.5rem;
    color: $text-color;
  }
  &-price {
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: 0.05rem;
    margin-top: 0.5rem;
    color: $secondary-color;
  }
}
</style>
