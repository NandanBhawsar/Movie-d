const API_KEY = "5854d04fcca0d8c7a016b02490131796";
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);

{/* This (encodeURI) removes anything from query string we cant pass */}
    
    const data = await response.json()
    return data.results
};