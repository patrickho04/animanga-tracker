import AnimeListItem from "@/components/shared/AnimeListItem";
import { getAnimeQuote, getSeasonAnimes } from "@/lib/animeAPI";

const HomePage = async () => {
  const quote = await getAnimeQuote();
  const cowboy1 = await getSeasonAnimes()
  const cowboy = cowboy1.data[10]

  return (
    <div className="container mx-auto lg:px-4">
      <div className="text-center max-w-[700px] mx-auto space-y-1 md:space-y-3">
        <h1 className="font-bold text-xl md:text-3xl">{`"${quote.data.content}"`}</h1>
        <h2 className="font-bold text-xl md:text-2xl">- {quote.data.character.name}</h2>
      </div>

      <AnimeListItem animeData={cowboy}size={200} className="w-40"  />
    </div>
  );
};

export default HomePage;
