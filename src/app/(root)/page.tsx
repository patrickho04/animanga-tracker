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
  getRecentAnimeReviews,
  getRecentMangaReviews,
  getSeasonAnimes,
  getTopAnimes,
  getTopMangas,
} from "@/lib/animeAPI";
import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {
  const seasonAnimes = (await getSeasonAnimes()).data;
  const topAnimes = (await getTopAnimes()).data;
  const topMangas = (await getTopMangas()).data;
  const recentAnimeReviews = (await getRecentAnimeReviews()).data;
  const recentMangaReviews = (await getRecentMangaReviews()).data;

  // Group cateogries into groups of 6
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
      <div id="body" className="block lg:flex mt-5">
        <div className="w-full lg:w-2/3 space-y-1">
          <section id="current-season-animes">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base lg:text-xl">
                Fall 2024 Anime
              </h3>
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
                    className="flex *:flex-1 gap-3 items-center h-[12.5vw] 2xl:h-[210px]"
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

              <div className="*:bg-primary text-white *:rounded-none *:h-[2vw] *:w-[5vw] *:border-none flex gap-20 justify-center mt-3">
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

          <section id="top-anime">
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
                    className="flex *:flex-1 gap-3 items-center h-[12.5vw] 2xl:h-[210px]"
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

              <div className="*:bg-primary text-white *:rounded-none *:h-[2vw] *:w-[5vw] *:border-none flex gap-20 justify-center mt-3">
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

          <section id="top-mangas">
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
                    className="flex *:flex-1 gap-3 items-center h-[12.5vw] 2xl:h-[210px]"
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

              <div className="*:bg-primary text-white *:rounded-none *:h-[2vw] *:w-[5vw] *:border-none flex gap-20 justify-center mt-3">
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

        <aside
          id="recent-reviews"
          className="lg:w-1/3 lg:ml-5 border-[1px] border-black p-3 mt-2 lg:mt-0"
        >
          <section id="anime-recent-reviews" className="h-1/2">
            <div className="flex justify-between">
              <h2 className="text-sm font-bold">Recent Anime Reviews</h2>
              <Link
                href="anime/reviews"
                className="text-[13px] lg:text-sm text-blue-600 dark:text-blue-500 hover:underline"
              >
                View All
              </Link>
            </div>
            <hr className="border-t-[0.5px] border-black mb-1" />

            {recentAnimeReviews
              .slice(0, 4)
              .map((animeReview: AnimangaReview) => (
                <div
                  key={animeReview.url}
                  className="text-[12px] mb-2 flex items-center gap-2"
                >
                  <div className="w-[82%] sm:w-[88%] lg:w-[82%]">
                    <div className="flex justify-between font-bold">
                      <h4>{animeReview.entry?.title}</h4>
                      <p>{animeReview.score}/10</p>
                    </div>

                    <span className="underline">
                      by {animeReview.user.username}
                    </span>

                    <p className="line-clamp-2">{animeReview.review}</p>
                    <Link
                      href={`/reviews/${animeReview.mal_id}`}
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Read more
                    </Link>
                  </div>

                  <div className="w-[18%] sm:w-[12%] lg:w-[18%]">
                    <Link href={`/anime/${animeReview.entry.mal_id}`}>
                      <Image
                        src={animeReview.entry.images["jpg"].image_url}
                        alt="anime"
                        width={200}
                        height={200}
                        className="h-full"
                      />
                    </Link>
                  </div>
                </div>
              ))}
          </section>

          <section id="manga-recent-reviews" className="h-1/2">
            <div className="flex justify-between">
              <h2 className="text-sm font-bold">Recent Manga Reviews</h2>
              <Link
                href="manga/reviews"
                className="text-[13px] lg:text-sm text-blue-600 dark:text-blue-500 hover:underline"
              >
                View All
              </Link>
            </div>
            <hr className="border-t-[0.5px] border-black mb-1" />

            {recentMangaReviews
              .slice(0, 4)
              .map((mangaReview: AnimangaReview) => (
                <div
                  key={mangaReview.url}
                  className="text-[12px] mb-2 flex items-center gap-2"
                >
                  <div className="w-[82%] sm:w-[88%] lg:w-[82%]">
                    <div className="flex justify-between font-bold">
                      <h4>{mangaReview.entry?.title}</h4>
                      <p>{mangaReview.score}/10</p>
                    </div>

                    <span className="underline">
                      by {mangaReview.user.username}
                    </span>

                    <p className="line-clamp-2">{mangaReview.review}</p>
                    <Link
                      href={`/reviews/${mangaReview.mal_id}`}
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Read more
                    </Link>
                  </div>

                  <div className="w-[18%] sm:w-[12%] lg:w-[18%]">
                    <Link href={`/manga/${mangaReview.entry.mal_id}`}>
                      <Image
                        src={mangaReview.entry.images["jpg"].image_url}
                        alt="manga"
                        width={200}
                        height={200}
                        className="h-full"
                      />
                    </Link>
                  </div>
                </div>
              ))}
          </section>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
