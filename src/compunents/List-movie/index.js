import React from "react";
import { useEffect, useState } from "react";
import "./style.scss";
import {
  newUpDateApi,
  movieShowingApi,
  seriesMovieApi,
  singleMovieApi,
  TVShowApi,
} from "../../api/movieListApi";
import MovieContainer from "./MovieContainer";

function ListMoive() {
  //   const [listCartegory, setListCartegory] = useState([]);
  const [newUpDateData, setNewUpDateData] = useState([]);
  const [movieShowingData, setMovieShowingData] = useState([]);
  const [seriesMovieData, setSeriesMovieData] = useState([]);
  const [singleMovieData, setSingleMovieData] = useState([]);
  const [TVShowData, setTVShowData] = useState([]);
  //   const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const params = {
          _limit: 10,
        };
        const [
          newUpDateApiRes,
          movieShowingApiRes,
          seriesMovieApiRes,
          singleMovieApiRes,
          TVShowApiRes,
        ] = await Promise.all([
          newUpDateApi.getAll(),
          movieShowingApi.getAll(),
          seriesMovieApi.getAll(),
          singleMovieApi.getAll(),
          TVShowApi.getAll(),
        ]);
        setNewUpDateData(newUpDateApiRes);
        setMovieShowingData(movieShowingApiRes);
        setSeriesMovieData(seriesMovieApiRes);
        setSingleMovieData(singleMovieApiRes);
        setTVShowData(TVShowApiRes);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    fetchMovie();
  }, []);
  return (
    <div>
      <MovieContainer data={newUpDateData} movieTitle={"Phim mới cập nhật"} />
      <MovieContainer data={movieShowingData} movieTitle={"Phim đang chiếu"} />
      <MovieContainer data={seriesMovieData} movieTitle={"Phim bộ"} />
      <MovieContainer data={singleMovieData} movieTitle={"Phim lẻ"} />
      <MovieContainer data={TVShowData} movieTitle={"TV Show"} />
    </div>
  );
}

export default ListMoive;
