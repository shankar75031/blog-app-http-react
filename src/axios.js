import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
instance.defaults.headers.common["Authorization"] = "AUTH_TOKEN FROM INSTANCE";
instance.defaults.headers.common["Content-Type"] = "application/json";

export default instance;
