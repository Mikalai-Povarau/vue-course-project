import Toggle from '../components/ToggleComponent.vue';

export default {
  title: 'Toggle',
  component: Toggle,
  argTypes: {
    modelValue: {
      type: 'boolean',
    },
  },
};

const Template = (args) => ({
  components: { Toggle },
  setup() {
    return { args };
  },
  template: '<Toggle v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'SORT BY',
  labelA: 'RATING',
  labelB: 'RELEASE DATE',
};
