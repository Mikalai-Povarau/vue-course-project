<template>
  <div class="home">
    <Search />
    <Button primary size="small" label="Search" />
  </div>
</template>

<script lang="ts">
import Button from "../components/Button.vue";
import Search from "../components/Search.vue";

export default {
  name: "HomeView",
  components: {
    Button,
    Search,
  },
};
</script>
