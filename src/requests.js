

const Api_Key = process.env.REACT_APP_API_KEY;

console.log(process.env);
const request = {
    fetchToprated: `/movie/top_rated?api_key=${Api_Key}&language=en-US`,
    fetchTrending: `/trending/all/week?api_key=${Api_Key}`,
    fetchRomance: `/discover/movie?api_key=${Api_Key}&with_genres=10749`,
    fetchNetflixOriginals: `/discover/tv?api_key=${Api_Key}&with-networks=213`,
    fetchAction: `/discover/movie?api_key=${Api_Key}&with_genres=28`,
    fetchHorror: `/discover/movie?api_key=${Api_Key}&with_genres=27`,
    fetchComedies: `/discover/movie?api_key=${Api_Key}&with_genres=35`,
    fetchFamily: `/discover/movie?api_key=${Api_Key}&with_genres=10751`
}

export default request;