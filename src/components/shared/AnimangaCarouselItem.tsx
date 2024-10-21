import Image from "next/image";
import Link from "next/link";

interface AnimangaCarouselItemProps {
  className?: string;
  size: number;
  animangaData: AnimeData | MangaData;
  isManga?: boolean
}

const AnimangaCarouselItem: React.FC<AnimangaCarouselItemProps> = ({
  animangaData,
  className,
  size,
  isManga = false
}) => {
  return (
    <Link href={`/${isManga ? "manga" : "anime"}/${animangaData.mal_id}`} className="relative">
      <Image
        src={animangaData.images["jpg"].large_image_url}
        alt={animangaData.titles[0].title}
        className={className}
        width={size}
        height={size}
      />

      <div className="absolute inset-0 flex items-center text-center text-sm text-white font-semibold px-2 py-1 bg-black bg-opacity-35 opacity-0 hover:opacity-100 transition-all duration-150">
        {animangaData.titles[0].title}
      </div>
    </Link>
  );
};

export default AnimangaCarouselItem;
