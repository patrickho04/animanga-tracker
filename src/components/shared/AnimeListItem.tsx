import Image from "next/image";
import Link from "next/link";

interface AnimeListItemProps {
  className?: string;
  size: number;
  animeData: AnimeData;
}

const AnimeListItem: React.FC<AnimeListItemProps> = ({
  animeData,
  className,
  size,
}) => {
  return (
    <Link href={`/anime/${animeData.mal_id}`} className="relative">
      <Image
        src={animeData.images["jpg"].large_image_url}
        alt={animeData.title_english}
        className={className}
        width={size}
        height={size}
      />

      <div className="absolute inset-0 flex items-baseline text-sm text-white font-semibold px-2 py-1 bg-black bg-opacity-35 opacity-0 hover:opacity-100 transition-all duration-150">
        {animeData.title_english}
      </div>
    </Link>
  );
};

export default AnimeListItem;
