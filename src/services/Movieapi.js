const movieUrl = "https://api.tvmaze.com";
export async function getAllShows() {
    const response = await fetch(`${movieUrl}/shows`);
    if(!response.ok){
        throw new Error("Unable To Fetch Shows");   
    }
    const data = await response.json();
    return data;
}
export async function searchShows(query) {
    const response = await fetch(`${movieUrl}/search/shows?q=${encodeURIComponent(query)}`);
if(!response.ok){
    throw new Error("failed to search shows");
}
const data = await response.json();
return data.map((item) => item.show);


}