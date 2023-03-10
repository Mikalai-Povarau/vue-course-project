<template>
  <div :class="classes">
    <span class="label" v-if="label">{{ label }}</span>
    <label>
      <input v-if="modelValue" type="checkbox" checked @change="onChange" />
      <input v-else type="checkbox" @change="onChange" />
      <span class="label-a">{{ labelA }}</span>
      <span class="label-b">{{ labelB }}</span>
    </label>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: false,
  },
  labelA: {
    type: String,
    required: true,
  },
  labelB: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);
const onChange = (event: Event) => {
  const target = event?.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
};

const classes = computed(() => ({
  'roulette-toggle-switch': true,
  'roulette-toggle-switch--primary': true,
  'roulette-toggle-switch--secondary': !props.primary,
}));
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.roulette-toggle-switch {
  .label {
    margin-right: 30px;
    display: inline-block;
  }

  label {
    display: inline-flex;
    border-radius: 5px;
    background: #616162;
    height: 40px;
    user-select: none;

    input {
      appearance: none;
      position: absolute;
    }

    .label-a,
    .label-b {
      display: flex;
      align-items: center;
      padding: 0 20px;
      color: #fff;
    }
  }

  &--primary {
    label {
      background: #616162;
    }

    .label-a {
      border-radius: 5px 0 0 5px;
      background: $bg-color-primary;
    }

    .label-b {
      border-radius: 0 5px 5px 0;
    }

    input:checked ~ .label-a {
      background: none;
    }

    input:checked ~ .label-b {
      background: $bg-color-primary;
    }
  }

  &--secondary {
    label {
      background: #616162;
    }

    .label-a {
      border-radius: 5px 0 0 5px;
      background: $bg-color-secondary;
    }

    .label-b {
      border-radius: 0 5px 5px 0;
    }

    input:checked ~ .label-a {
      background: none;
    }

    input:checked ~ .label-b {
      background: #0080ff;
    }
  }
}
</style>
