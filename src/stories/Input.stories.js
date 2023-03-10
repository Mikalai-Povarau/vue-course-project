import InputItem from '../components/InputComponent.vue';

export default {
  title: 'Input',
  component: InputItem,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = (args) => ({
  components: { InputItem },
  setup() {
    return { args };
  },
  template: '<InputItem v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  label: 'Button',
};
