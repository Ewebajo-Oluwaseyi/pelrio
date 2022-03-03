import axios from "../../config/index";

export const loginUser = async (form) => {
  return axios.post("/api/auth", form);
};

export const createUser = async (form) => {
  return axios.post("/api/users", form);
};

export const loadUser = async (config) => {
  return axios.get("/api/auth", config);
};
