<template>
  <div class="event__card">
    <figure class="event__card-image">
      <div v-if="'loading'"></div>
      <img class="event__card-image-item" :src="article.image" alt="" srcset="">
    </figure>
    <p class="event__card-date">{{article.date}}</p>
    <h3 class="event__card-name">{{article.name}}</h3>
    <span class="event__card-price">{{article.price}}</span>
  </div>
</template>
<script>
export default {
  props: ['article']
}
</script>
<style lang="scss">
  .event__card{
    margin-bottom: 3rem;
    &-image{
      margin-bottom: 1.9rem;
    }
    &-date{
      font-size: 1.2rem;
      line-height: 1.4rem;
    }
    &-name{
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 2.2rem;
      margin-top: 0.5rem;
    }
    &-price{
      font-size: 1.4rem;
      line-height: 1.7rem;
      letter-spacing: 0.05rem;
       margin-top: 0.5rem;
    }
  }
</style>
