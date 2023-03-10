<template>
  <input :class="classes" :value="modelValue" @input="onChange" />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    validator: function (value: string) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1;
    },
  },
});

const emit = defineEmits(['update:modelValue']);
const onChange = (event: Event) => {
  const target = event?.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const classes = computed(() => ({
  'roulette-input': true,
  [`roulette-input--${props.size || 'medium'}`]: true,
}));
</script>

<style lang="scss">
.roulette-input {
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
