<template>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <LogoComponent :primary="true" size="large" />
  </footer>
</template>
<script setup lang="ts">
import LogoComponent from './components/LogoComponent.vue';
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
onBeforeMount(() => {
  store.dispatch('fetchFilms');
});
</script>
