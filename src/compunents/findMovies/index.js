import React, { useEffect, useState } from "react";
import Movie from "../movie";
import "./style.scss";
import { Link } from "react-router-dom";
import SearchMovieApi from "../../api/searchMovieApi";

function FindMovies(props) {
  const [movies, setMovies] = useState([]);

  const url = window.location.pathname;
  const slug = url.substring(url.lastIndexOf("/") + 1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await SearchMovieApi.getAll(slug);
        const { items } = response;
        setMovies(items);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [slug]);
  return (
    <div className="container-genre">
      {movies.length > 0 ? (
        <>
          <h1>Phim liên quan</h1>
          <div className="wrap-list-genre">
            {movies.map((movie, index) => (
              <Link to={`/phim/${movie.slug}`} className="movie" key={index}>
                <Movie movie={movie} />
              </Link>
            ))}
          </div>
        </>
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

export default FindMovies;
