import axios from "axios";

const url = "https://strapi.dynamicdevs.io";

export const getStaff = () => {
  return axios.get(`${url}/co-workers`).then(({ data }) => data);
};
