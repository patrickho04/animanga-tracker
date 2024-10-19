import AnimeListItem from "@/components/shared/AnimeListItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getAnimeQuote, getSeasonAnimes } from "@/lib/animeAPI";
import Link from "next/link";

const HomePage = async () => {
  const quote = await getAnimeQuote();
  const seasonAnimes = (await getSeasonAnimes()).data;

  // Group season animes into groups of 6
  const groupedSeasonAnimes = [];
  for (let i = 0; i < seasonAnimes.length - 1; i += 6) {
    groupedSeasonAnimes.push(seasonAnimes.slice(i, i + 6));
  }

  return (
    <div className="container mx-auto lg:px-4">
      <section
        id="quote"
        className="text-center max-w-[700px] mx-auto space-y-1 md:space-y-3"
      >
        <h1 className="font-bold text-[13px] md:text-3xl">{`"${quote.data.content}"`}</h1>
        <h2 className="font-bold text-lg md:text-2xl">
          - {quote.data.character.name}
        </h2>
      </section>

      <section id="current-anime-season" className="py-5 lg:py-10">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-base lg:text-xl">Fall 2024 Anime</h3>
          <Link href="anime/season" className="text-[13px] lg:text-sm text-blue-600 dark:text-blue-500 hover:underline">
            View More
          </Link>
        </div>
        <hr className="border-t-2 border-black mb-1" />

        <Carousel opts={{ loop: true }} className="hidden lg:block">
          <CarouselContent>
            {groupedSeasonAnimes.map((group, index) => (
              <CarouselItem
                key={index}
                className="flex gap-3 items-center h-[20vw] 2xl:h-[300px]"
              >
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

          <div className="*:bg-primary text-white *:rounded-none *:h-[5vw] *:border-none">
            <CarouselPrevious className="hover:bg-primary/90 hover:text-white" />
            <CarouselNext className="hover:bg-primary/90 hover:text-white" />
          </div>
        </Carousel>

        <ScrollArea className="block lg:hidden">
          <div className="flex w-max items-center gap-1 h-[35.5vw] sm:h-[24vw]">
            {seasonAnimes.map((anime: AnimeData) => (
              <AnimeListItem
                key={anime.mal_id}
                animeData={anime}
                size={200}
                className="w-[25vw] sm:w-[17vw]"
              />
            ))}
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
};

export default HomePage;
