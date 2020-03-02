const axios = require("axios");

const api_key = require("../keys/keys").apiKey;

const fetchData = async (url) => {
  const response = await axios.get(url);
  const data = await response.data;
  const formatedData = await data.results;
  const smallData = await formatedData.map((result) => {
    return {
      title: result.title,
      releaseDate: result.release_date,
      img: `https://image.tmdb.org/t/p/w185_and_h278_bestv2${result.poster_path}`,
      desc: result.overview,
      rating: result.vote_average
    };
  });
  return smallData;
};

const movies = async () => {
  const resultsOne = await fetchData(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
  );
  const resultsTwo = await fetchData(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=2`
  );
  const results = [...resultsOne, ...resultsTwo];
  return results;
};

module.exports = movies;
