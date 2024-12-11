export type FilmsResponse = {
  results: MovieDBMovie[];
};

export type MovieDBMovie = {
  title: string;
  backdrop_path: string;
};

export type IconProps = {
  size: number;
  className?: string;
};
