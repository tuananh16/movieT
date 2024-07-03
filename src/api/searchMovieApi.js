import axiosClient from "./axiosClient";

const SearchMovieApi = {
  getAll(slug) {
    const url = `films/search?keyword=${slug}`;
    return axiosClient.get(url);
  },
};

export default SearchMovieApi;
