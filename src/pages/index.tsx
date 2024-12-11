import { Bebas_Neue } from "next/font/google";

import PlayIcon from "@src/icons/PlayIcon";
import PlusIcon from "@src/icons/PlusIcon";
import Button from "@src/UI/Button";
import Movie from "@src/UI/Movie";
import Dropdown from "@src/UI/Dropdown";
import { MovieDBMovie, FilmsResponse } from "@src/types";
import { getMovieDBImageURL } from "@src/utils/images";
import DROPDOWN_OPTIONS from "@src/constants/dropdownOptions";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

type HomeProps = { featured: MovieDBMovie; popular: MovieDBMovie[] };

export default function Home({ featured, popular }: HomeProps) {
  return (
    <main className={bebas.className}>
      <header className="relative flex items-end h-90dvh lg:min-h-dvh min-w-dvw px-8 pb-12 lg:pl-25 lg:pr-112.25 lg:pb-40.5 max-lg:bg-gradient-to-t from-black from-20% to-transparent">
        <img
          src={getMovieDBImageURL(featured.backdrop_path)}
          className="absolute left-0 top-0 h-full w-full object-cover -z-10"
        />
        <section className="flex flex-col w-full max-lg:items-center">
          <h5 className="text-xl font-normal leading-5 text-white tracking-wider max-lg:text-center">
            ORIGINAL DE <span className="font-bold">LITEFLIX</span>
          </h5>
          <h1 className="text-19 lg:text-30 leading-19.5 lg:leading-25 tracking-wider lg:tracking-widest text-primary my-4 lg:mt-6 lg:mb-8 max-lg:text-center">
            {featured.title}
          </h1>
          <footer className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <Button
              variant="primary"
              text="Reproducir"
              Icon={<PlayIcon size={14} />}
            />
            <Button
              variant="secondary"
              text="Mi Lista"
              Icon={<PlusIcon size={14} />}
            />
          </footer>
        </section>
      </header>

      <ul className="relative flex flex-col items-center z-10 space-y-5 max-lg:w-full max-lg:p-5 max-lg:pb-13 lg:absolute lg:right-26 lg:bottom-20">
        <Dropdown
          label="Ver"
          options={DROPDOWN_OPTIONS}
          className="flex w-full justify-center"
        />
        {popular.map((movie) => (
          <li className="w-full" key={movie.title}>
            <Movie movie={movie} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps() {
  const FEATURED_FILMS_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20";
  const POPULAR_FILMS_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20";
  const MAX_POPULAR_FILMS = 4;

  const [featuredRes, popularRes] = await Promise.all([
    fetch(FEATURED_FILMS_URL),
    fetch(POPULAR_FILMS_URL),
  ]);

  if (!featuredRes.ok || !popularRes.ok) {
    return {
      redirect: {
        destination: "/500",
      },
    };
  }

  const featuredData: FilmsResponse = await featuredRes.json();
  const popularData: FilmsResponse = await popularRes.json();

  return {
    props: {
      featured: featuredData.results[0],
      popular: popularData.results.slice(0, MAX_POPULAR_FILMS),
    },
  };
}

