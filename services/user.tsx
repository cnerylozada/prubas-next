import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () => {
  return axios.get(url).then(({ data }) => data);
};
