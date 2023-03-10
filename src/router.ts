import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './pages/HomeVies.vue';
import FilmDetailsView from './pages/FilmDetailsView.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', component: HomeView },
    {
      name: 'search',
      path: '/search',
      component: HomeView,
      props: (route) => {
        return {
          ...route.params,
          searchValue: route.query.sv,
          searchBy: Number(route.query.sb ?? 0),
          sortBy: Number(route.query.sort ?? 0),
        };
      },
    },
    {
      path: '/film-details/:filmId',
      component: FilmDetailsView,
      props: (route) => {
        return {
          ...route.params,
          ...{ filmId: Number(route.params.filmId) },
        };
      },
    },
  ],
});
