import axiosClient from "./axiosClient";

const countryApi = {
  getAll(slug, page) {
    const url = `films/quoc-gia/${slug}?page=${page}`;
    return axiosClient.get(url);
  },
};
export default countryApi;
