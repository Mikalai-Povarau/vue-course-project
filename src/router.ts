import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './pages/HomeVies.vue';
import FilmDetailsView from './pages/FilmDetailsView.vue';
import ErrorView from './pages/ErrorView.vue';

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
          searchValue: route.query.query,
          searchBy: Number(route.query.searchBy ?? 0),
          sortBy: Number(route.query.sortBy ?? 0),
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
    {
      path: '/:catchAll(.*)',
      component: ErrorView,
    },
  ],
});
