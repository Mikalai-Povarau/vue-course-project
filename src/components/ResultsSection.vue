<template>
  <section class="roulette-film-list">
    <div class="roulette-film-list__no-films" v-if="!films.length">
      No films found
    </div>
    <filmCard v-for="film in films" v-bind="film" :key="film.id" />
  </section>
</template>
<script setup lang="ts">
import filmCard from './FilmCard.vue';
import { IFilm } from '@/interface';
import { defineProps, PropType } from 'vue';

const props = defineProps({
  films: {
    type: Array as PropType<IFilm[]>,
    required: true,
    default: () => [],
  },
});
</script>

<style lang="scss">
.roulette-film-list {
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  justify-content: space-around;
  padding: 50px 20px;
  margin: 20px 0;
  background: #232323;

  .roulette-film-list__no-films {
    font-size: 3rem;
  }
}
</style>
