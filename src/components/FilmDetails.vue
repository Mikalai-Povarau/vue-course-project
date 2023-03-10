<template>
  <section class="roulette-film-details">
    <LogoComponent :primary="true" size="large" />
    <div class="roulette-film-details__content">
      <div class="roulette-film-details__img-wrapper">
        <img :src="props.posterPath" alt="Poster" />
      </div>
      <div class="roulette-film-details__info">
        <div class="roulette-film-details__info__header">
          <h2 class="roulette-film-details__title">
            {{ props.title }}
          </h2>
          <p class="roulette-film-details__rating">{{ props.rating }}</p>
        </div>

        <div class="roulette-film-details__info__subheader">
          <div class="roulette-film-details__geners">{{ genreList }}</div>
          <div class="roulette-film-details__year">
            <span>{{ releaseDateYear }}</span> year
          </div>
        </div>

        <p class="roulette-film-details__description">
          {{ props.description }}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
// Vue + typescript does not support import for defineProps
import { computed, defineProps, withDefaults } from 'vue';
import LogoComponent from '../components/LogoComponent.vue';

interface IFilm {
  id: number;
  posterPath: string;
  title: string;
  releaseDate?: string;
  genres?: Array<string>;
  description: string;
  runtime: number;
  rating: number;
  tagline: string;
}

const props = withDefaults(defineProps<IFilm>(), {
  releaseDate: '',
  genres: () => [],
});

const releaseDateYear = computed(() => {
  return props.releaseDate.split('-')[0];
});
const genreList = computed(() => {
  return props.genres.join(', ');
});
</script>
<style scoped lang="scss">
.roulette-film-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background-image: url('~@/assets/hero-image-blured.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__img-wrapper {
    max-width: 350px;
    margin-right: 40px;

    img {
      width: 100%;
    }
  }

  &__content {
    display: flex;
    padding: 40px;
  }

  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    opacity: 0.8;
    &__header {
      font-size: 42px;
      display: flex;
      justify-content: start;
      align-items: center;
    }
    &__subheader {
      display: flex;
    }
  }
  &__title {
    margin: 0 40px 0 0;
  }
  &__rating {
    margin: 0;
    border: 1px solid #ffffff;
    padding: 15px;
    border-radius: 50%;
  }

  &__geners,
  &__year {
    margin: 10px 40px 0 0;
    font-size: 25px;
    color: #f65261;
  }

  &__description {
    font-size: 20px;
  }
}
</style>
