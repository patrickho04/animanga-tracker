import AnimeListItem from "@/components/shared/AnimeListItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getAnimeQuote, getSeasonAnimes } from "@/lib/animeAPI";

const HomePage = async () => {
  const quote = await getAnimeQuote();
  const seasonAnimes = (await getSeasonAnimes()).data;

  // Group season animes into groups of 5
  const groupedSeasonAnimes = [];
  for (let i = 0; i < seasonAnimes.length-1; i += 6) {
    groupedSeasonAnimes.push(seasonAnimes.slice(i, i + 6));
  }

  return (
    <div className="container mx-auto lg:px-4">
      <div id="quote" className="text-center max-w-[700px] mx-auto space-y-1 md:space-y-3">
        <h1 className="font-bold text-[13px] md:text-3xl">{`"${quote.data.content}"`}</h1>
        <h2 className="font-bold text-lg md:text-2xl">
          - {quote.data.character.name}
        </h2>
      </div>

      <section id="current-anime-season">
        <h3 className="font-bold text-xl">Fall 2024 Anime</h3>
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {groupedSeasonAnimes.map((group, index) => (
              <CarouselItem key={index} className="flex gap-3 items-center h-[20vw]">
                {group.map((anime: AnimeData) => (
                  <AnimeListItem
                    key={anime.mal_id}
                    animeData={anime}
                    size={200}
                    className="w-auto"
                  />
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="rounded-none h-[18.5vw]" />
          <CarouselNext className="rounded-none h-[18.5vw]" />
        </Carousel>
      </section>
    </div>
  );
};

export default HomePage;
