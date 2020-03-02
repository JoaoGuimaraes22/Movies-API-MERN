import React from "react";
import MovieSection from "../movieSection/movieSection";
import HeaderPlaying from "../header/headerPlaying";

const SectionPlaying = () => {
  return (
    <div>
      <HeaderPlaying />
      <MovieSection url="/api/movies-playing" />
    </div>
  );
};

export default SectionPlaying;
