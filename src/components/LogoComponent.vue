<template>
  <div :class="classes">
    <a href="/"><strong>netflix</strong>roulette</a>
  </div>
</template>
<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: function (value: string) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1;
    },
  },
});

const classes = computed(() => ({
  'roulette-logo': true,
  'roulette-logo--primary': props.primary,
  'roulette-logo--secondary': !props.primary,
  [`roulette-logo--${props.size || 'medium'}`]: true,
}));
</script>
<style lang="scss" scoped>
@import '../assets/_variables.scss';
.roulette-logo {
  a {
    text-decoration: none;
  }

  &--primary {
    a {
      color: $bg-color-primary;
    }
  }
  &--secondary {
    a {
      color: $bg-color-secondary;
    }
  }
  &--large {
    font-size: 2rem;
  }
  &--medium {
    font-size: 1.5rem;
  }
  &--small {
    font-size: 1rem;
  }
}
</style>
