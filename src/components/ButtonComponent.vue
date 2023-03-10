<template>
  <button :class="classes" @click="onClick">
    {{ props.label }}
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
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

const emit = defineEmits(['change']);

const onClick = emit('change');

const classes = computed(() => ({
  'roulette-button': true,
  'roulette-button--primary': props.primary,
  'roulette-button--secondary': !props.primary,
  [`roulette-button--${props.size || 'medium'}`]: true,
}));
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.roulette-button {
  border: 0;
  border-radius: 5px;
  padding: 0 1em;
  cursor: pointer;

  &--primary {
    background: $bg-color-primary;
    color: #fff;
  }
  &--secondary {
    background: $bg-color-secondary;
    color: #fff;
  }
  &--large {
    font-size: 1rem;
    min-height: 40px;
  }
  &--medium {
    font-size: 1rem;
    min-height: 30px;
  }
  &--small {
    font-size: 1rem;
    min-height: 20px;
  }
}
</style>
