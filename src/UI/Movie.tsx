import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { MovieDBMovie } from "@src/types";
import { getMovieDBImageURL } from "@src/utils/images";
import StarIcon from "@src/UI/icons/Star";
import CircledPlayIcon from "@src/UI/icons/CircledPlay";

type MovieProps = {
  movie: MovieDBMovie;
};

export default function Movie({ movie }: MovieProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMode = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <button
      className={twMerge(
        "focusable w-full with-transition aspect-video lg:w-55 text-white lg:h-36.5 flex justify-center items-end relative rounded-md overflow-hidden bg-black/30",
        isOpen && "bg-black/70"
      )}
      onClick={toggleMode}
    >
      <Image
        src={getMovieDBImageURL(movie.backdrop_path)}
        alt={movie.title}
        className="object-stretch -z-10 rounded-md"
        fill
      />

      <div
        className={twMerge(
          "absolute top-1/2 truncate w-full flex items-center justify-center p-4 -translate-y-1/2",
          isOpen && "justify-start"
        )}
      >
        <CircledPlayIcon size={isOpen ? 20 : 40} />

        {isOpen && (
          <label className="ml-3 text-white text-center truncate text-base uppercase tracking-big">
            {movie.title}
          </label>
        )}
      </div>

      <div
        className={twMerge(
          "text-base uppercase tracking-big text-white p-4 w-full flex justify-between translate-y-full with-transition",
          isOpen && "translate-y-0"
        )}
      >
        <span className="space-x-2 flex items-center">
          <StarIcon size={16} className="fill-primary mb-1" />
          <label>{movie.vote_average.toFixed(1)}</label>
        </span>
        <label>{movie.release_date.split("-").at(0)}</label>
      </div>
    </button>
  );
}

