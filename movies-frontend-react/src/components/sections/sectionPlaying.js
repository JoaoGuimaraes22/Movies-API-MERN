import React from "react";
import MovieSection from "../movieSection/movieSection";
import HeaderPlaying from "../header/headerPlaying";
import Footer from "../footer/footer";

const SectionPlaying = () => {
  return (
    <div>
      <HeaderPlaying />
      {/* <MovieSection url="/api/movies-playing" /> */}
      <MovieSection url="/api/test" />
      <Footer />
    </div>
  );
};

export default SectionPlaying;
