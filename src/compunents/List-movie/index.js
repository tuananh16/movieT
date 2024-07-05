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
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const [
          newUpDateApiRes1,
          movieShowingApiRes1,
          seriesMovieApiRes1,
          singleMovieApiRes1,
          TVShowApiRes1,
        ] = await Promise.all([
          newUpDateApi.getAll(1),
          movieShowingApi.getAll(1),
          seriesMovieApi.getAll(1),
          singleMovieApi.getAll(1),
          TVShowApi.getAll(1),
        ]);
        await delay(2000);
        const [
          newUpDateApiRes2,
          movieShowingApiRes2,
          seriesMovieApiRes2,
          singleMovieApiRes2,
          TVShowApiRes2,
        ] = await Promise.all([
          newUpDateApi.getAll(2),
          movieShowingApi.getAll(2),
          seriesMovieApi.getAll(2),
          singleMovieApi.getAll(2),
          TVShowApi.getAll(2),
        ]);
        const combinedNewUpDateData = [
          ...newUpDateApiRes1.items,
          ...newUpDateApiRes2.items,
        ];
        const combinedMovieShowingData = [
          ...movieShowingApiRes1.items,
          ...movieShowingApiRes2.items,
        ];
        const combinedSeriesMovieData = [
          ...seriesMovieApiRes1.items,
          ...seriesMovieApiRes2.items,
        ];
        const combinedSingleMovieData = [
          ...singleMovieApiRes1.items,
          ...singleMovieApiRes2.items,
        ];
        const combinedTVShowData = [
          ...TVShowApiRes1.items,
          ...TVShowApiRes2.items,
        ];
        console.log("test", combinedNewUpDateData);
        setNewUpDateData(combinedNewUpDateData);
        setMovieShowingData(combinedMovieShowingData);
        setSeriesMovieData(combinedSeriesMovieData);
        setSingleMovieData(combinedSingleMovieData);
        setTVShowData(combinedTVShowData);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    fetchMovie();
  }, []);
  console.log("data", newUpDateData);

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
