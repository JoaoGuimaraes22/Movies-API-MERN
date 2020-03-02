import React from "react";
import MovieSection from "../movieSection/movieSection";
import HeaderPopular from "../header/headerPopular";
import Footer from "../footer/footer";

const SectionPopular = () => {
  return (
    <div>
      <HeaderPopular />
      {/* <MovieSection url="/api/movies-popular" /> */}
      <MovieSection url="/api/test" />
      <Footer />
    </div>
  );
};

export default SectionPopular;
