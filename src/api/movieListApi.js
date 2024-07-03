import axiosClient from "./axiosClient";

export const newUpDateApi = {
  getAll(page) {
    const url = `films/phim-moi-cap-nhat?page=${page}`;
    return axiosClient.get(url);
  },
};

export const movieShowingApi = {
  getAll(page) {
    const url = `films/danh-sach/phim-dang-chieu?page=${page}`;
    return axiosClient.get(url);
  },
};

export const seriesMovieApi = {
  getAll(page) {
    const url = `films/danh-sach/phim-bo?page=${page}`;
    return axiosClient.get(url);
  },
};

export const singleMovieApi = {
  getAll(page) {
    const url = `films/danh-sach/phim-le?page=${page}`;
    return axiosClient.get(url);
  },
};

export const TVShowApi = {
  getAll(page) {
    const url = `films/danh-sach/TV-SHows?page=${page}`;
    return axiosClient.get(url);
  },
};

// Assign the object to a variable before exporting it as module default
const api = {
  newUpDateApi,
  movieShowingApi,
  seriesMovieApi,
  singleMovieApi,
  TVShowApi,
};

export default api;
