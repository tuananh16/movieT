import axiosClient from "./axiosClient";

const genreApi = {
  getAll(slug, page) {
    const url = `films/the-loai/${slug}?page=${page}`;
    return axiosClient.get(url);
  },
};
export default genreApi;
