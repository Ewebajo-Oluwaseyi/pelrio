import axios from "axios";
const baseUrl = "https://pelriologin.herokuapp.com/";

/**axios config */
export default axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
