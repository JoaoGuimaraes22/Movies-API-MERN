import React from "react";
import MovieSection from "../movieSection/movieSection";
import HeaderComing from "../header/headerComing";

const SectionComing = () => {
  return (
    <div>
      <HeaderComing />
      <MovieSection url="/api/movies" />
    </div>
  );
};

export default SectionComing;
