import { getAnimeById, getAnimeNews } from "@/lib/animeAPI";
import { FC } from "react";

interface Params {
  id: string; // Define the shape of your params
}

interface AnimePageProps {
  params: Params; // Define props type
}

const AnimePage: FC<AnimePageProps> = async ({ params }) => {
  const animeData = (await getAnimeById(Number(params.id))).data;
  const animeNews = (await getAnimeNews(Number(params.id))).data;

  console.log(animeNews);

  return (
    <div className="container mx-auto lg:px-4">
      AnimePage
      {animeData.aired.to}
      <iframe
        src={`https://www.youtube.com/embed/${animeData.trailer.youtube_id}`}
        className="aspect-video"
      />
    </div>
  );
};

export default AnimePage;
