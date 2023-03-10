<template>
  <section class="roulette-film-card">
    <router-link :to="pathTofilmDetails">
      <div class="roulette-film-card__img-wrapper">
        <img class="image__item" :src="posterPath" alt="random image" />
      </div>
    </router-link>
    <div class="roulette-film-card__header">
      <h3 class="roulette-film-card__title">{{ props.title }}</h3>
      <time class="roulette-film-card__year" datatype="{{props.releaseDate}}">{{
        releaseDateYear
      }}</time>
    </div>
    <div class="roulette-film-card__geners">
      {{ genreList }}
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed, defineProps } from 'vue';

// Vue + typescript does not support import for defineProps
interface IFilm {
  id?: number;
  posterPath: string;
  title: string;
  releaseDate: string;
  genres: Array<string>;
}

const props = defineProps<IFilm>();

const releaseDateYear = computed(() => {
  return props.releaseDate.split('-')[0];
});
const genreList = computed(() => {
  return props.genres.join(', ');
});
const pathTofilmDetails = computed(() => {
  return `/film-details/${props.id}`;
});
</script>
<style scoped lang="scss">
.roulette-film-card {
  width: 300px;
  padding: 5px 20px 40px;
  position: relative;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 22px;
    margin-right: 5px;
    opacity: 0.5;
  }

  &__year {
    font-size: 22px;
    padding: 10px;
    border: 1px solid #555555;
    border-radius: 5px;
    opacity: 0.5;
  }
  &__geners {
    font-size: 18px;
    margin-right: 5px;
    opacity: 0.5;
  }

  &__img-wrapper {
    height: 455px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
}
</style>
