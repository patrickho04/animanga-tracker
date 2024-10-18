export async function getAnimeQuote() {
    const res = await fetch("https://animechan.io/api/v1/quotes/random")
    const data = await res.json()

    return data
}