import React, { useEffect, useState } from "react";
import Movie from "../movie";
import "./style.scss";
import genreApi from "../../api/genreMovieApi";
import { Link } from "react-router-dom";
import Pagination from "../../common/pagination/page";

function MovieGenre(props) {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const url = window.location.pathname;
  const slug = url.substring(url.lastIndexOf("/") + 1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await genreApi.getAll(slug, currentPage);
        const { items, cat, paginate } = response;
        setMovies(items);
        setGenre(cat);
        setTotalPages(paginate.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [slug, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setMovies(movies.length === 0);
  };

  return (
    <div className="container-genre">
      {movies.length > 0 ? (
        <>
          <h1>Phim Thể Loại {genre.name}</h1>
          <div className="wrap-list-genre">
            {movies.map((movie, index) => (
              <Link to={`/phim/${movie.slug}`} className="movie" key={index}>
                <Movie movie={movie} />
              </Link>
            ))}
          </div>
          <div className="pagination">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
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

export default MovieGenre;
