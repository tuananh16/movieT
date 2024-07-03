import axiosClient from "./axiosClient";

const movieApi = {
  getAll(movie) {
    var url = window.location.pathname;
    var name = url.substring(url.lastIndexOf("/") + 1);
    const url2 = `film/${name}`;
    return axiosClient.get(url2);
  },
};

export default movieApi;
