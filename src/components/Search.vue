<template>
  <input type="text" class="search" placeholder="Search" />
</template>

<script>
export default {
  name: "search--input",
};
</script>

<style scoped>
.search {
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background: rgba(66, 66, 66, 0.1);
  min-height: 32px;
}

.search::placeholder {
  color: #ffffff;
}
</style>
