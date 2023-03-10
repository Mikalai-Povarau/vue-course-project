export interface ISearchData {
  searchValue: string;
  searchBy: SearchBy;
}

export const enum SearchBy {
  Title,
  Genre,
}

export const enum SortBy {
  ReleaseDate,
  Rating,
}

export interface IFilm {
  id: number;
  posterPath: string;
  title: string;
  releaseDate: string;
  genres: Array<string>;
  rating: number;
}
