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
    <Link href={`/anime/${animeData.mal_id}`} className="w-auto">
      <Image
        src={animeData.images["jpg"].large_image_url}
        alt={animeData.title_english}
        className={className}
        width={size}
        height={size}
      />
    </Link>
  );
};

export default AnimeListItem;
