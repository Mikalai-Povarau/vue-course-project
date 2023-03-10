import { Plugin } from 'vue';

export const log: Plugin = {
  install(app) {
    app.directive('log', {
      mounted: () => console.log('Log: Greetings!!!'),
    });
  },
};
