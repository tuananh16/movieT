import axiosClient from "./axiosClient";

export const newUpDateApi = {
  getAll(page) {
    const url = `films/phim-moi-cap-nhat?page=1`;
    return axiosClient.get(url);
  },
};

export const movieShowingApi = {
  getAll(page) {
    const url = `films/danh-sach/phim-dang-chieu?page=2`;
    return axiosClient.get(url);
  },
};

export const seriesMovieApi = {
  getAll(page) {
    const url = `films/danh-sach/phim-bo?page=3`;
    return axiosClient.get(url);
  },
};

export const singleMovieApi = {
  getAll(page) {
    const url = `films/danh-sach/phim-le?page=1`;
    return axiosClient.get(url);
  },
};
export const TVShowApi = {
  getAll(page) {
    const url = `films/danh-sach/TV-SHows?page=1`;
    return axiosClient.get(url);
  },
};

export default {
  newUpDateApi,
  movieShowingApi,
  seriesMovieApi,
  singleMovieApi,
  TVShowApi,
};
