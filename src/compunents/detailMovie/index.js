import React, { useEffect, useState } from "react";
import "./style.scss";
import movieApi from "../../api/movieApi";
import { Link, useParams } from "react-router-dom";

function DetailMovie(props) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // const slug = window.location.pathname.substring(
  //   window.location.pathname.lastIndexOf("/") + 1
  // );
  // console.log("name", slug);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await movieApi.getAll();
        if (response && response.movie) {
          setMovie(response.movie);
          setError(false);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <section className="dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </section>
    );
  }

  if (error) {
    return <div className="error">Không tìm thấy phim</div>;
  }

  return (
    <div>
      <div className="detail-movie">
        <div className="container-right">
          <img src={movie.thumb_url} alt="Movie Poster" />
          <div className="btn">
            <Link to={`xem-phim/${movie.slug}`}>
              <button> Xem phim</button>
            </Link>
          </div>
        </div>
        <div className="container-left">
          <h1>{movie.name}</h1>
          <div className="full-info-movie">
            <span>Trạng thái: {movie.current_episode}</span>
            <span>Diễn viên: {movie.casts}</span>
            <span>Đạo diễn: {movie.director}</span>
            <span>Thời lượng: {movie.time}</span>
            <span>Tổng số tập: {movie.total_episodes}</span>
            <span>Chất lượng: {movie.quality}</span>
            <span>Ngôn ngữ: {movie.language}</span>
            <span>Thể loại: {movie.category[2].list[0].name}</span>
            <span>Năm: {movie.category[3].list[0].name}</span>
            <span>Quốc gia: {movie.category[4].list[0].name}</span>
            <p>Giới thiệu: {movie.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailMovie;
