import AnimangaCarouselItem from "@/components/shared/AnimangaCarouselItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  getAnimeQuote,
  getSeasonAnimes,
  getTopAnimes,
  getTopMangas,
} from "@/lib/animeAPI";
import Link from "next/link";

const HomePage = async () => {
  const quote = await getAnimeQuote();
  const seasonAnimes = (await getSeasonAnimes()).data;
  const topAnimes = (await getTopAnimes()).data;
  const topMangas = (await getTopMangas()).data;

  // Group season animes into groups of 6
  const groupedSeasonAnimes = [];
  for (let i = 0; i < seasonAnimes.length - 1; i += 6) {
    groupedSeasonAnimes.push(seasonAnimes.slice(i, i + 6));
  }

  const groupedTopAnimes = [];
  for (let i = 0; i < topAnimes.length - 1; i += 6) {
    groupedTopAnimes.push(topAnimes.slice(i, i + 6));
  }

  const groupedTopMangas = [];
  for (let i = 0; i < topMangas.length - 1; i += 6) {
    groupedTopMangas.push(topMangas.slice(i, i + 6));
  }

  return (
    <div className="container mx-auto lg:px-4">
      <section
        id="quote"
        className="text-center max-w-[700px] mx-auto space-y-1 md:space-y-3 pt-5"
      >
        <h1 className="font-bold text-[13px] md:text-3xl">{`"${quote.data.content}"`}</h1>
        <h2 className="font-bold text-lg md:text-2xl">
          - {quote.data.character.name}
        </h2>
      </section>

      <section
        id="current-season-animes"
        className="py-2.5 lg:pt-10 w-full lg:w-3/4"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-base lg:text-xl">Fall 2024 Anime</h3>
          <Link
            href="anime/season"
            className="text-[13px] lg:text-sm text-blue-600 dark:text-blue-500 hover:underline"
          >
            View All
          </Link>
        </div>
        <hr className="border-t-2 border-black mb-1" />

        <Carousel opts={{ loop: true }} className="hidden lg:block">
          <CarouselContent>
            {groupedSeasonAnimes.map((group, index) => (
              <CarouselItem
                key={index}
                className="flex *:flex-1 gap-3 items-center h-[13.8vw] 2xl:h-[210px]"
              >
                {group.map((anime: AnimeData) => (
                  <AnimangaCarouselItem
                    key={anime.mal_id}
                    animangaData={anime}
                    size={200}
                  />
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="*:bg-primary text-white *:rounded-none *:h-[2vw] *:w-[5vw] *:border-none flex gap-20 justify-center mt-5">
            <CarouselPrevious className="hover:bg-primary/90 hover:text-white" />
            <CarouselNext className="hover:bg-primary/90 hover:text-white" />
          </div>
        </Carousel>

        <ScrollArea className="block lg:hidden">
          <div className="flex w-max items-center gap-1 h-[35.5vw] sm:h-[24vw] overflow-y-hidden">
            {seasonAnimes.map((anime: AnimeData) => (
              <AnimangaCarouselItem
                key={anime.mal_id}
                animangaData={anime}
                size={200}
                className="w-[25vw] sm:w-[17vw]"
              />
            ))}
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      <section id="top-anime" className="py-2.5 w-full lg:w-3/4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-base lg:text-xl">Top Anime</h3>
          <Link
            href="anime/top"
            className="text-[13px] lg:text-sm text-blue-600 dark:text-blue-500 hover:underline"
          >
            View All
          </Link>
        </div>
        <hr className="border-t-2 border-black mb-1" />

        <Carousel opts={{ loop: true }} className="hidden lg:block">
          <CarouselContent>
            {groupedTopAnimes.map((group, index) => (
              <CarouselItem
                key={index}
                className="flex *:flex-1 gap-3 items-center h-[13.8vw] 2xl:h-[210px]"
              >
                {group.map((anime: AnimeData) => (
                  <AnimangaCarouselItem
                    key={anime.mal_id}
                    animangaData={anime}
                    size={200}
                  />
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="*:bg-primary text-white *:rounded-none *:h-[2vw] *:w-[5vw] *:border-none flex gap-20 justify-center mt-5">
            <CarouselPrevious className="hover:bg-primary/90 hover:text-white" />
            <CarouselNext className="hover:bg-primary/90 hover:text-white" />
          </div>
        </Carousel>

        <ScrollArea className="block lg:hidden">
          <div className="flex w-max items-center gap-1 h-[35.5vw] sm:h-[24vw] overflow-y-hidden">
            {topAnimes.map((anime: AnimeData) => (
              <AnimangaCarouselItem
                key={anime.mal_id}
                animangaData={anime}
                size={200}
                className="w-[25vw] sm:w-[17vw]"
              />
            ))}
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      <section id="top-mangas" className="py-2.5 w-full lg:w-3/4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-base lg:text-xl">Top Mangas</h3>
          <Link
            href="manga/top"
            className="text-[13px] lg:text-sm text-blue-600 dark:text-blue-500 hover:underline"
          >
            View All
          </Link>
        </div>
        <hr className="border-t-2 border-black mb-1" />

        <Carousel opts={{ loop: true }} className="hidden lg:block">
          <CarouselContent>
            {groupedTopMangas.map((group, index) => (
              <CarouselItem
                key={index}
                className="flex *:flex-1 gap-3 items-center h-[13.8vw] 2xl:h-[210px]"
              >
                {group.map((manga: MangaData) => (
                  <AnimangaCarouselItem
                    key={manga.mal_id}
                    animangaData={manga}
                    size={200}
                    isManga
                  />
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="*:bg-primary text-white *:rounded-none *:h-[2vw] *:w-[5vw] *:border-none flex gap-20 justify-center mt-5">
            <CarouselPrevious className="hover:bg-primary/90 hover:text-white" />
            <CarouselNext className="hover:bg-primary/90 hover:text-white" />
          </div>
        </Carousel>

        <ScrollArea className="block lg:hidden">
          <div className="flex w-max items-center gap-1 h-[35.5vw] sm:h-[24vw] overflow-y-hidden">
            {topMangas.map((manga: MangaData) => (
              <AnimangaCarouselItem
                key={manga.mal_id}
                animangaData={manga}
                size={200}
                className="w-[25vw] sm:w-[17vw]"
                isManga
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
