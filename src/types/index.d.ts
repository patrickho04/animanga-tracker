type AnimangaCategorySchema = {
    pagination: Pagination;
    data: AnimeData[] | MangaData[];
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

type MangaData = {
    mal_id:          number;
    url:             string;
    images:          { [key: string]: Image };
    approved:        boolean;
    titles:          Title[];
    title:           string;
    title_english:   string;
    title_japanese:  string;
    title_synonyms:  string[];
    type:            MangaType;
    chapters:        number | null;
    volumes:         number | null;
    status:          MangaStatus;
    publishing:      boolean;
    published:       Published;
    score:           number;
    scored:          number;
    scored_by:       number;
    rank:            number;
    popularity:      number;
    members:         number;
    favorites:       number;
    synopsis:        string;
    background:      string;
    authors:         Author[];
    serializations:  Author[];
    genres:          Author[];
    explicit_genres: unknown[];
    themes:          Author[];
    demographics:    Author[];
}

type Author = {
    mal_id: number;
    type:   AuthorType;
    name:   string;
    url:    string;
}

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

enum MangaStatus {
    Finished = "Finished",
    OnHiatus = "On Hiatus",
    Publishing = "Publishing",
}

enum Status {
    CurrentlyAiring = "Currently Airing",
    NotYetAired = "Not yet aired",
}

type Title = {
    type: TitleType | MangaTitleType;
    title: string;
};

enum MangaTitleType {
    Default = "Default",
    English = "English",
    French = "French",
    German = "German",
    Japanese = "Japanese",
    Spanish = "Spanish",
    Synonym = "Synonym",
}

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

enum MangaType {
    LightNovel = "Light Novel",
    Manga = "Manga",
    Novel = "Novel",
}

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

type AnimangaReview = {
    mal_id:           number;
    url:              string;
    type:             Type;
    reactions:        Reactions;
    date:             Date;
    review:           string;
    score:            number;
    tags:             Tag[];
    is_spoiler:       boolean;
    is_preliminary:   boolean;
    episodes_watched?: null;
    chapters_read?:  null;
    entry:            Entry;
    user:             User;
}

type Entry = {
    mal_id: number;
    url:    string;
    images: { [key: string]: EntryImage };
    title:  string;
}

type EntryImage = {
    image_url:       string;
    small_image_url: string;
    large_image_url: string;
}

type Reactions = {
    overall:      number;
    nice:         number;
    love_it:      number;
    funny:        number;
    confusing:    number;
    informative:  number;
    well_written: number;
    creative:     number;
}

enum Tag {
    MixedFeelings = "Mixed Feelings",
    NotRecommended = "Not Recommended",
    Recommended = "Recommended",
}

enum Type {
    Anime = "anime",
}

type User = {
    url:      string;
    username: string;
    images:   { [key: string]: UserImage };
}

type UserImage = {
    image_url: string;
}