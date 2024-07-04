import React, { useEffect, useState } from "react";
import Movie from "../../movie";
import "./style.scss";
import { Link } from "react-router-dom";

function MovieContainer({ data, movieTitle }) {
  const movies = data.items;
  // console.log("data", movies);

  const [startIndex, setStartIndex] = useState(0);
  const totalMovies = data.items?.length || 0;
  const [i, setI] = useState(getResponsiveValue());

  function getResponsiveValue() {
    const width = window.innerWidth;

    if (width > 1200) {
      return 6;
    } else if (width > 992) {
      return 5;
    } else if (width > 768) {
      return 4;
    } else if (width > 576) {
      return 3;
    } else {
      return 2;
    }
  }
  useEffect(() => {
    const handleResize = () => {
      setI(getResponsiveValue());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    if (startIndex + i < totalMovies) {
      setStartIndex(startIndex + i);
    } else {
      setStartIndex(0);
    }
  };

  const prevSlide = () => {
    if (startIndex - i >= 0) {
      setStartIndex(startIndex - i);
    } else {
      const lastIndexGroup = Math.floor(totalMovies / i) * i;
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
            {/* Map over the current i-movie group */}
            {movies
              .slice(startIndex, startIndex + i) // Ensure movies is defined before slicing
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
