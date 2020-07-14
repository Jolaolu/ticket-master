<template>
  <div class="event__card">
    <figure class="event__card-image">
      <div v-if="'loading'"></div>
      <img
        class="event__card-image-item"
        :src="article.image"
        :alt="`${article.name} event`"
      />
    </figure>
    <p class="event__card-date">{{ article.date }}</p>
    <h3 class="event__card-name">{{ article.name }}</h3>
    <span class="event__card-price">{{ article.price }}</span>
  </div>
</template>
<script>
export default {
  props: ['article']
}
</script>
<style lang="scss">
.event__card {
  cursor: pointer;
  margin-bottom: 3rem;
  &-image {
    margin-bottom: 1.9rem;
    &-item {
      border-radius: 6px;
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
