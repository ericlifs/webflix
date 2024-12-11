import { Bebas_Neue } from "next/font/google";
import { twMerge } from "tailwind-merge";

import Button from "@src/UI/Button";
import PlayIcon from "@src/icons/PlayIcon";
import PlusIcon from "@src/icons/PlusIcon";
import { MovieDBMovie, FeaturedFilmsResponse } from "@src/types";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Home({ featured }: { featured: MovieDBMovie }) {
  return (
    <main
      className={twMerge(
        bebas.className,
        "flex items-end min-h-screen-height min-w-screen-width pl-25 pr-26 pb-40.5"
      )}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${featured.backdrop_path})`}
        className="absolute top-0 left-0 h-screen-height w-screen-width object-cover -z-10"
      />
      <section className="flex flex-col">
        <h5 className="text-xl font-normal leading-5 text-white tracking-wider">
          ORIGINAL DE <span className="font-bold">LITEFLIX</span>
        </h5>
        <h1 className="text-8.5xl leading-25 tracking-widest text-primary mt-6 mb-8">
          {featured.title}
        </h1>
        <footer className="flex gap-6">
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
    </main>
  );
}

export async function getServerSideProps() {
  const featuredFilmRes = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
  );

  if (!featuredFilmRes.ok) {
    return {
      redirect: {
        destination: "/500",
      },
    };
  }

  const featuredFilmData: FeaturedFilmsResponse = await featuredFilmRes.json();
  const [featured] = featuredFilmData.results;

  return {
    props: { featured },
  };
}

