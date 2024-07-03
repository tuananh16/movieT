import React, { useState } from "react";
import Movie from "../../movie";
import "./style.scss";
import { Link } from "react-router-dom";

function MovieContainer({ data, movieTitle }) {
  const movies = data.items;
  // console.log("data", movies);

  const [startIndex, setStartIndex] = useState(0);
  const totalMovies = data.items?.length || 0;

  const nextSlide = () => {
    if (startIndex + 5 < totalMovies) {
      setStartIndex(startIndex + 5);
    } else {
      setStartIndex(0);
    }
  };

  const prevSlide = () => {
    if (startIndex - 5 >= 0) {
      setStartIndex(startIndex - 5);
    } else {
      const lastIndexGroup = Math.floor(totalMovies / 5) * 5;
      setStartIndex(lastIndexGroup);
    }
  };

  return (
    <div className="container-movie">
      <div className="container-title">
        <h2>{movieTitle}</h2>
        {/* <a href="#">&#187; Xem tất cả</a> */}
      </div>
      {movies ? (
        <div className="slideshow-container">
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="movies-list">
            {/* Map over the current 5-movie group */}
            {movies
              .slice(startIndex, startIndex + 5) // Ensure movies is defined before slicing
              .map((movie, index) => (
                <Link to={`/phim/${movie.slug}`} className="movie" key={index}>
                  <Movie movie={movie} />
                </Link>
              ))}
          </div>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      ) : (
        <div className="loading">
          <section className="dots-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </section>
        </div>
      )}
    </div>
  );
}

export default MovieContainer;
