import { createStore } from 'vuex';
import { IApiFilm, IFilm, SearchBy, SortBy } from '@/interface';

export default createStore({
  strict: true,
  state: {
    films: [] as Array<IFilm>,
    searchValue: '',
    searchBy: SearchBy.Title,
    sortBy: SortBy.ReleaseDate,
  },
  getters: {
    filmDetails: (state) => (filmId: number) => {
      return state.films.find((film: IFilm) => film.id === filmId);
    },
    filteredFilmsByTitle: (state) => (searchValue: string, sortBy: number) => {
      const searchValueLowerCased = searchValue.toLowerCase();
      const films = state.films
        .filter(({ title }) => {
          return title.toLowerCase().indexOf(searchValueLowerCased) != -1;
        })
        .sort((a: IFilm, b: IFilm) => {
          if (sortBy === SortBy.ReleaseDate) {
            return (
              new Date(b.releaseDate).valueOf() -
              new Date(a.releaseDate).valueOf()
            );
          } else {
            return b.rating - a.rating;
          }
        });

      return films;
    },
    filteredFilmsByGenre: (state) => (searchValue: string, sortBy: number) => {
      const searchValueLowerCased = searchValue.toLowerCase();
      const films = state.films
        .filter(({ genres }) => {
          return (
            genres.join(' ').toLowerCase().indexOf(searchValueLowerCased) != -1
          );
        })
        .sort((a: IFilm, b: IFilm) => {
          if (sortBy === SortBy.ReleaseDate) {
            return (
              new Date(b.releaseDate).valueOf() -
              new Date(a.releaseDate).valueOf()
            );
          } else {
            return b.rating - a.rating;
          }
        });

      return films;
    },
  },
  mutations: {
    updateProductsData(state, films) {
      state.films = films;
    },
    updateSearchData(state, searchData) {
      state.searchValue = searchData.searchValue;
      state.searchBy = searchData.searchBy;
      state.sortBy = searchData.sortBy;
    },
  },
  actions: {
    updateSearchData: ({ commit }, searchData) => {
      commit('updateSearchData', searchData);
    },
    fetchFilms: async ({ commit }) => {
      let data: Array<IApiFilm> = [];
      const url = 'https://tame-erin-pike-toga.cyclic.app/movies';

      const fetchAPI = async () => {
        try {
          const response = await fetch(url);
          data = await response.json();
        } catch (error: unknown) {
          console.log(error as Error);
        }
      };
      await fetchAPI();

      const films = data?.map((item) => {
        return {
          id: item.id,
          posterPath: item.posterurl,
          title: item.title,
          releaseDate: item.releaseDate,
          genres: item.genres,
          rating: item.imdbRating,
          description: item.storyline,
        };
      });
      commit('updateProductsData', films);
    },
  },
  modules: {},
});
