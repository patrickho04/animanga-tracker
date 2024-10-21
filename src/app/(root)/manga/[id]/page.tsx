import { FC } from 'react';

interface Params {
  id: string; // Define the shape of your params
}

interface MangaPageProps {
  params: Params; // Define props type
}

const MangaPage: FC<MangaPageProps> = ({ params }) => {
  return (
    <div className="container mx-auto lg:px-4">
        MangaPage
        {params.id}
    </div>
  )
}

export default MangaPage