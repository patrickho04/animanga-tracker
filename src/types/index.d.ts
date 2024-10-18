type JSONSchema = {
    pagination: Pagination;
    data: AnimeData[];
};

type AnimeData = {
    mal_id: number;
    url: string;
    images: { [key: string]: Image };
    trailer: Trailer;
    approved: boolean;
    titles: Title[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: DatumType;
    source: Source;
    episodes: number | null;
    status: Status;
    airing: boolean;
    aired: Aired;
    duration: string;
    rating: Rating;
    score: number | null;
    scored_by: number | null;
    rank: number | null;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    season: Season | null;
    year: number | null;
    broadcast: Broadcast;
    producers: Demographic[];
    licensors: Demographic[];
    studios: Demographic[];
    genres: Demographic[];
    explicit_genres: unknown[];
    themes: Demographic[];
    demographics: Demographic[];
};

type Aired = {
    from: Date;
    to: Date | null;
    prop: Prop;
    string: string;
};

type Prop = {
    from: From;
    to: From;
};

type From = {
    day: number | null;
    month: number | null;
    year: number | null;
};

type Broadcast = {
    day: null | string;
    time: null | string;
    timezone: Timezone | null;
    string: null | string;
};

enum Timezone {
    AsiaTokyo = "Asia/Tokyo",
}
type Demographic = {
    mal_id: number;
    type: DemographicType;
    name: string;
    url: string;
};

enum DemographicType {
    Anime = "anime",
}

type Image = {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
};

enum Rating {
    PG13Teens13OrOlder = "PG-13 - Teens 13 or older",
    R17ViolenceProfanity = "R - 17+ (violence & profanity)",
}

enum Season {
    Fall = "fall",
}

enum Source {
    LightNovel = "Light novel",
    Manga = "Manga",
    WebManga = "Web manga",
}

enum Status {
    CurrentlyAiring = "Currently Airing",
    NotYetAired = "Not yet aired",
}

type Title = {
    type: TitleType;
    title: string;
};

enum TitleType {
    Default = "Default",
    English = "English",
    Japanese = "Japanese",
    Synonym = "Synonym",
}

type Trailer = {
    youtube_id: null | string;
    url: null | string;
    embed_url: null | string;
    images: Images;
};

type Images = {
    image_url: null | string;
    small_image_url: null | string;
    medium_image_url: null | string;
    large_image_url: null | string;
    maximum_image_url: null | string;
};

enum DatumType {
    Ona = "ONA",
    Tv = "TV",
}

type Pagination = {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: Items;
};

type Items = {
    count: number;
    total: number;
    per_page: number;
};
