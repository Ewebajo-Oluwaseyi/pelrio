import * as constants from "../constants/auth";
import * as api from "../api/auth";
//import { useHistory } from "react-router-dom";

export const loadUser = (setInfo) => async (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["x-Auth-token"] = token;
  }
  try {
    const { data } = await api.loadUser(config);
    if (data) {
      dispatch({
        type: constants.LOAD_USER,
        payload: data,
      });
    }
  } catch (err) {
    setInfo(err.message);
  }
};

export const loginUser =
  (form, setInfo, setPageLoader, router) => async (dispatch) => {
    // const router = useHistory();
    setPageLoader(true);
    try {
      const { data } = await api.loginUser(form);
      console.log(data);
      if (data) {
        setPageLoader(false);
        dispatch({
          type: constants.LOGIN_USER,
          payload: data,
        });
        router.push("/home");
      }
    } catch (err) {
      setPageLoader(false);
      setInfo(err.message);
    }
  };

export const createUser =
  (form, setInfo, setPageLoader, router) => async (dispatch) => {
    setPageLoader(true);
    try {
      const { data } = await api.createUser(form);
      if (data) {
        setPageLoader(false);
        dispatch({
          type: constants.CREATE_USER,
          payload: data.token,
        });
        router.push("/home");
      }
    } catch (err) {
      setPageLoader(false);
      setInfo(err.message);
    }
  };

export const logout = (setInfo, setIsLoaded, router) => async (dispatch) => {
  setIsLoaded(true);
  try {
    dispatch({ type: constants.LOG_OUT });
    router.push("/login");
    setIsLoaded(false);
  } catch (err) {
    setIsLoaded(false);
    setInfo(err.message);
  }
};
