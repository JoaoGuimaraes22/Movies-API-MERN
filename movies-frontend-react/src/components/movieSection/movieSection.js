import React from "react";
import MovieList from "../moviesList/movieList";

const MovieSection = ({ url }) => {
  return (
    <section className="movie-section">
      <MovieList url={url} />
    </section>
  );
};

export default MovieSection;
