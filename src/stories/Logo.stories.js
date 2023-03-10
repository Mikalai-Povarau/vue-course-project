import Logo from '../components/LogoComponent.vue';

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = (args) => ({
  components: { Logo },
  setup() {
    return { args };
  },
  template: '<Logo v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  primary: true,
};
