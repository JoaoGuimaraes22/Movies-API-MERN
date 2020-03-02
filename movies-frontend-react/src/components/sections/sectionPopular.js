import React from "react";
import MovieSection from "../movieSection/movieSection";
import HeaderPopular from "../header/headerPopular";

const SectionPopular = () => {
  return (
    <div>
      <HeaderPopular />
      <MovieSection url="/api/movies-popular" />
    </div>
  );
};

export default SectionPopular;
