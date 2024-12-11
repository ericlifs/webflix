export type FilmsResponse = {
  results: MovieDBMovie[];
};

export type MovieDBMovie = {
  title: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
};

export type IconProps = {
  size: number;
  className?: string;
};

