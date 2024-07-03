import React, { useEffect, useState } from "react";
import "./style.scss";
import movieApi from "../../api/movieApi";

function WatchMovie(props) {
  const [movie, setMovie] = useState({});
  const [currentEpisode, setCurrentEpisode] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await movieApi.getAll();
        if (response) {
          setMovie(response.movie);
        } else {
          console.log("Error: no response data");
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchData();
  }, []);

  const handleEpisodeClick = (episode) => {
    setCurrentEpisode(episode);
  };

  const episodeUrl =
    movie.episodes?.[0]?.items?.[currentEpisode - 1]?.embed || "";

  return (
    <div className="container-watch-movie">
      <h1>{movie.name}</h1>
      <div className="iframe-wrapper">
        <iframe
          width="60%"
          height="100%"
          src={episodeUrl}
          title="description"
          allowFullScreen
        ></iframe>
      </div>
      <h2>Danh sách các tập phim: Tập {currentEpisode}</h2>
      <div className="wrap-episode">
        <ul>
          {movie.episodes?.[0]?.items?.map((episode, index) => (
            <li
              key={index}
              className={currentEpisode === index + 1 ? "active-episode" : ""}
              onClick={() => handleEpisodeClick(index + 1)}
            >
              {episode.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WatchMovie;
