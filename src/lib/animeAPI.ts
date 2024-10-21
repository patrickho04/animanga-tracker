// Get individual series
export async function getAnimeById(idNum: number) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${idNum}`)
    const data = await res.json()

    return data
}

export async function getMangaById(idNum: number) {
    const res = await fetch(`https://api.jikan.moe/v4/manga/${idNum}`)
    const data = await res.json()

    return data
}

// Get categories (24 series each page)
export async function getSeasonAnimes(pageNum: number = 1) {
    const res = await fetch(`https://api.jikan.moe/v4/seasons/now?page=${pageNum}`)
    const data = await res.json()

    return data
}

export async function getTopAnimes(pageNum: number = 1) {
    const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${pageNum}`)
    const data = await res.json()

    return data
}

export async function getTopMangas(pageNum: number = 1) {
    const res = await fetch(`https://api.jikan.moe/v4/top/manga?page=${pageNum}`)
    const data = await res.json()

    return data
}

// Anime Misc
export async function getAnimeNews(idNum: number, pageNum: number = 1) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${idNum}/news?page=${pageNum}`)
    const data = await res.json()

    return data
}

// Reviews
export async function getRecentAnimeReviews(pageNum: number = 1) {
    const res = await fetch(`https://api.jikan.moe/v4/reviews/anime?page=${pageNum}`)
    const data = await res.json()

    return data
}

export async function getRecentMangaReviews(pageNum: number = 1) {
    const res = await fetch(`https://api.jikan.moe/v4/reviews/manga?page=${pageNum}`)
    const data = await res.json()

    return data
}
