<template>
  <LogoComponent :primary="true" size="large" />
  <div class="page-404 not-found">
    <div class="page-404__content">
      <h1>404 - Wrong direction</h1>
      <p>This is the way.</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import LogoComponent from '@/components/LogoComponent.vue';
</script>
<style scoped lang="scss">
.page-404 {
  display: flex;
  justify-content: center;
  padding: 40px;
  background-image: url('~@/assets/hero-image-blured.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__content {
    padding: 0 40px 40px 40px;

    h1 {
      font-size: 50px;
      text-align: center;
    }
    p {
      font-size: 32px;
      text-align: center;
    }
  }
}
</style>
