export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "9b3a625c85535b4f9746c7e67e91eff1";
const endPoint = "https://api.themoviedb.org/3/movie";
const endPointSearch = "https://api.themoviedb.org/3/search/movie";


export const tmdbAPI = {
  getMovieList: (type,page=1) => `${endPoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetail: (movieId) => `${endPoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId,type) =>
    `${endPoint}/${movieId}/${type}?api_key=${apiKey}`,
  getMovieSearch:(query,page) =>  `${endPointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
  getMovieUpComing:()=> `${endPoint}/upcoming?api_key=${apiKey}`,
  imageOriginal: (url)=> `https://image.tmdb.org/t/p/original/${url}`,
  image500: (url)=>`https://image.tmdb.org/t/p/w500/${url}`
};
