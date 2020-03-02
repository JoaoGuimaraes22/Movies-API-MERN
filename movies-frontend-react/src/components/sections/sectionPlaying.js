import React from "react";
import MovieSection from "../movieSection/movieSection";
import HeaderPlaying from "../header/headerPlaying";

const SectionPlaying = () => {
  return (
    <div>
      <HeaderPlaying />
      <MovieSection url="/api/movies" />
    </div>
  );
};

export default SectionPlaying;
