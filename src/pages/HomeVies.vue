<template>
  <HeroSection
    :searchValue="searchValue"
    :searchBy="searchBy"
    @update:modelValue="onUpdateHeroSection"
  />
  <div class="roulette-header-result">
    <div class="roulette-film-found">
      {{ filteredfilms.length }} film(s) found
    </div>
    <div class="roulette-sort-by">
      <ToggleSwitch
        label="SORT BY"
        label-a="RELEASE DATE"
        label-b="RATING"
        :primary="true"
        :sortBy="sortBy"
        @update:modelValue="onUpdateSortBy"
      />
    </div>
  </div>
  <ResultsSection :films="filteredfilms" />
</template>

<script setup lang="ts">
import ResultsSection from '../components/ResultsSection.vue';
import HeroSection from '../components/HeroSection.vue';
import { computed, defineProps, onMounted } from 'vue';
import router from '../router';
import ToggleSwitch from '@/components/ToggleComponent.vue';
import { SearchBy, SortBy } from '@/interface';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

const props = defineProps({
  searchValue: {
    type: String,
    default: '',
  },
  searchBy: {
    type: Number,
    default: SearchBy.Title,
  },
  sortBy: {
    type: Number,
    default: SortBy.ReleaseDate,
  },
});

const updateSearchData = ({
  searchValue = props.searchValue,
  searchBy = Number(props.searchBy),
  sortBy = Number(props.sortBy),
}: {
  searchValue?: string;
  searchBy?: number | boolean;
  sortBy?: number | boolean;
}) => {
  store.dispatch('updateSearchData', {
    searchValue: searchValue,
    searchBy: Number(searchBy),
    sortBy: Number(sortBy),
  });
  router.push({
    path: 'search',
    query: {
      query: searchValue,
      searchBy: Number(searchBy).toString(),
      sortBy: Number(sortBy).toString(),
    },
  });
};

const onUpdateHeroSection = function ({
  searchValue,
  searchBy,
}: {
  searchValue: string;
  searchBy: number;
}) {
  updateSearchData({
    searchValue,
    searchBy,
  });
};

const onUpdateSortBy = function (value: boolean) {
  updateSearchData({
    sortBy: value,
  });
};

onMounted(() => {
  if (route.name === 'search') {
    updateSearchData({});
  }
});

const filteredfilms = computed(() => {
  if (props.searchBy === SearchBy.Title) {
    return store.getters.filteredFilmsByTitle(props.searchValue, props.sortBy);
  } else {
    return store.getters.filteredFilmsByGenre(props.searchValue, props.sortBy);
  }
});
</script>
<style scoped lang="scss">
.roulette-header-result {
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 0 80px;
}

.roulette-sort-by {
  margin-left: auto;
}
</style>
