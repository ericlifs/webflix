import "./index.css";
import { Bebas_Neue } from "next/font/google";

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
    <main className={bebas.className}>
      <img
        src={`https://image.tmdb.org/t/p/original${featured.backdrop_path})`}
        className="featured-film-bg"
      />
      <section className="featured-film">
        <h5>
          ORIGINAL DE <span>LITEFLIX</span>
        </h5>
        <h1>{featured.title}</h1>
        <footer>
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

