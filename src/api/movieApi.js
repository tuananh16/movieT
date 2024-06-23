import axiosClient from "./axiosClient";

const movieApi = {
  getAll(movie) {
    var url = window.location.pathname;
    var movie = url.substring(url.lastIndexOf("/") + 1);
    const url2 = `/phim/${movie}`;
    return axiosClient.get(url2);
  },
};

export default movieApi;
