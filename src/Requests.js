const key = '6afe8b3975d6bb7c0298017509a5d92c';

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/popular?api_key=${key}>&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=true`,
  requestUpcoming: `https://api.themoviedb.org/movie/popular?api_key=${key}&language=en-US&page=1`,
};

export default requests;
