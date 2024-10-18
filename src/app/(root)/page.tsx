import { getAnimeQuote } from "@/lib/animeAPI";

const HomePage = async () => {
  const quote = await getAnimeQuote();

  return (
    <div className="container mx-auto lg:px-4">
      <div className="text-center max-w-[700px] mx-auto space-y-1 md:space-y-3">
        <h1 className="font-bold text-2xl md:text-3xl">{`"${quote.data.content}"`}</h1>
        <h2 className="font-bold text-xl md:text-2xl">- {quote.data.character.name}</h2>
      </div>
      HomePage
    </div>
  );
};

export default HomePage;
