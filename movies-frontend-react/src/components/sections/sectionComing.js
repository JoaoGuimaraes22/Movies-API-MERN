import React from "react";
import MovieSection from "../movieSection/movieSection";
import HeaderComing from "../header/headerComing";
import Footer from "../footer/footer";

const SectionComing = () => {
  return (
    <div>
      <HeaderComing />
      {/* <MovieSection url="/api/movies-upcoming" /> */}
      <MovieSection url="/api/test" />
      <Footer />
    </div>
  );
};

export default SectionComing;
