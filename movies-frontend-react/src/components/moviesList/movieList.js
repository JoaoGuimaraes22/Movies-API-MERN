import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MovieList = ({ url }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const MySwal = withReactContent(Swal);

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
        <div className="loader">
          <div className="loadingio-spinner-spinner-mob15g72a9c">
            <div className="ldio-37kf75nqm8a">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
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
                <p
                  className="movie__see-more"
                  onClick={() => {
                    MySwal.fire({
                      title: <h3>{mov.title}</h3>,
                      html: (
                        <div style={{ paddingTop: "1rem" }}>
                          <p>{mov.desc}</p>
                          <p
                            style={{
                              color: "#777777",
                              paddingTop: "1rem",
                              fontSize: "0.9rem"
                            }}
                          >
                            Rating: {mov.rating}
                          </p>
                        </div>
                      ),
                      footer: `Release date: ${mov.releaseDate}`,
                      confirmButtonColor: "#e21a38"
                    });
                  }}
                >
                  See more
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MovieList;
