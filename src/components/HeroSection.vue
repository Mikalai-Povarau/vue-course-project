<template>
  <section class="roulette-find-your-film">
    <div class="blur">
      <LogoComponent :primary="true" size="large" />
      <div class="roulette-find-your-film__content">
        <h2>FIND YOUR MOVIE</h2>
        <SearchInput
          :primary="true"
          label="SEARCH"
          size="large"
          :searchValue="data.searchValue"
          @submit="handlerSearchSubmit"
        />
        <br />
        <ToggleSwitch
          :primary="true"
          label="SEARCH BY"
          labelA="TITLE"
          labelB="GENRE"
          v-model="data.isChecked"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { defineEmits, reactive, defineProps } from 'vue';
import SearchInput from '@/components/SearchComponent.vue';
import ToggleSwitch from '@/components/ToggleComponent.vue';
import LogoComponent from '../components/LogoComponent.vue';
import { SearchBy } from '@/interface';

const props = defineProps({
  searchValue: String,
  searchBy: Number,
});

const data = reactive({
  searchValue: props.searchValue,
  isChecked: Boolean(props.searchBy),
});

const emit = defineEmits(['update:modelValue']);
const handlerSearchSubmit = function (value: string) {
  const searchBy = data.isChecked ? SearchBy.Genre : SearchBy.Title;
  emit('update:modelValue', {
    searchValue: value,
    searchBy: searchBy,
  });
};
</script>
<style scoped lang="scss">
.roulette-find-your-film {
  background-image: url('~@/assets/hero-image-blured.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px;

  &__content {
    padding: 0 40px 40px 40px;
    h2 {
      font-size: 49px;
    }
  }
}
</style>
