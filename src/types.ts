export type FeaturedFilmsResponse = {
  results: MovieDBMovie[];
};

export type MovieDBMovie = {
  title: string;
  backdrop_path: string;
};

