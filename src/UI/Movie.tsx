import CircledPlayIcon from "@src/icons/CircledPlayIcon";
import { MovieDBMovie } from "@src/types";
import { getMovieDBImageURL } from "@src/utils/images";

type MovieProps = {
  movie: MovieDBMovie;
};

export default function Movie({ movie }: MovieProps) {
  return (
    <button className="w-full aspect-video lg:w-55 text-white lg:h-36.5 p-4 max-lg:pb-8 flex justify-center items-end relative rounded-md overflow-hidden bg-black/30">
      <img
        src={getMovieDBImageURL(movie.backdrop_path)}
        className="absolute top-0 left-0 h-full w-full object-stretch -z-10 rounded-md"
      />
      <CircledPlayIcon
        size={40}
        className="absolute top-0 bottom-0 self-center"
      />
      <label className="text-white truncate text-center text-base uppercase tracking-big">
        {movie.title}
      </label>
    </button>
  );
}

