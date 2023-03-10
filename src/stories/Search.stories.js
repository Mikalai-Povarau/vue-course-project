import Search from '../components/SearchComponent.vue';

export default {
  title: 'Search',
  component: Search,
};

const Template = (args) => ({
  components: { Search },
  setup() {
    return { args };
  },
  template: '<search-section v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'Search',
};
