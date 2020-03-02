import React, { useState, useEffect } from "react";

const MovieList = ({ url }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setMovies(data);
    };
    getMovies();
  }, [url]);

  return (
    <div className="movieList">
      {loading ? (
        <div className="">
          <h1>Loading</h1>
        </div>
      ) : (
        <div className="movie-grid">
          {movies.map((mov) => {
            return (
              <div className="movie" key={mov._id}>
                <div className="movie__img-container">
                  <img src={mov.img} alt={mov.title} className=""></img>
                </div>
                <h1 className="movie__title">
                  {mov.title.length < 40
                    ? mov.title
                    : `${mov.title.substring(0, 40)}...`}
                </h1>
                <h4 className="movie__date">Released in {mov.releaseDate}</h4>
                <p className="movie__rating">Rating: {mov.rating}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MovieList;
