<template>
  <div v-if="film.details">
    <filmDetails v-bind="film.details" />
    <div class="roulette-header-result">
      Films by "{{ film.details.genres[0] }}" genre
    </div>
    <ResultsSection :films="film.filmTheSameGenre" />
  </div>
</template>
<script setup lang="ts">
import { defineProps, computed } from 'vue';
import ResultsSection from '../components/ResultsSection.vue';
import filmDetails from '../components/FilmDetails.vue';
import { useStore } from 'vuex';
import { SortBy } from '@/interface';

const props = defineProps({
  filmId: Number,
});

const store = useStore();

const film = computed(() => {
  const details = store.getters.filmDetails(props.filmId);
  let filmTheSameGenre = [];
  if (details) {
    filmTheSameGenre = store.getters.filteredFilmsByGenre(
      details.genres[0],
      SortBy.ReleaseDate
    );
  }

  return {
    details,
    filmTheSameGenre,
  };
});
</script>
<style scoped lang="scss">
.roulette-header-result {
  margin-top: 20px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  padding: 0 40px;
}
</style>
