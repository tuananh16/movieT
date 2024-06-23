import React, { useState } from "react";
import Movie from "../../movie"; // Corrected the import
import "./style.scss";

function MovieContainer({ data, movieTitle }) {
  // Ensure data.items is defined and is an array
  const movies = data.items || [];
  // const totalMovies = movies.length;

  const [startIndex, setStartIndex] = useState(0); // Start index of current 6-movie group
  const totalMovies = data.items?.length || 0;

  const nextSlide = () => {
    if (startIndex + 6 < totalMovies) {
      setStartIndex(startIndex + 6);
    } else {
      setStartIndex(0); // Wrap around to the beginning
    }
  };

  const prevSlide = () => {
    if (startIndex - 6 >= 0) {
      setStartIndex(startIndex - 6);
    } else {
      // If at the beginning, go to the last group
      const lastIndexGroup = Math.floor(totalMovies / 6) * 6;
      setStartIndex(lastIndexGroup);
    }
  };

  return (
    <div className="container-movie">
      <div className="container-title">
        <h2>{movieTitle}</h2>
        <a href="#">&#187; Xem tất cả</a>
      </div>
      <div className="slideshow-container">
        <button
          className="prev"
          onClick={prevSlide}
          // disabled={startIndex === 0}
        >
          &#10094;
        </button>
        <div className="movies-list">
          {/* Map over the current 6-movie group */}
          {movies
            .slice(startIndex, startIndex + 6) // Ensure movies is defined before slicing
            .map((movie, index) => (
              <div className="movie" key={index}>
                <Movie movie={movie} />
              </div>
            ))}
        </div>
        <button
          className="next"
          onClick={nextSlide}
          // disabled={startIndex + 6 >= totalMovies}
        >
          &#10096;
        </button>
      </div>
    </div>
  );
}

export default MovieContainer;
