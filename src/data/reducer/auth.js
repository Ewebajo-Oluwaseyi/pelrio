import * as constants from "../constants/auth";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CREATE_USER:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
      };
    case constants.LOGIN_USER:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("login_date", action.payload.login_date);
      return {
        ...state,
        token: action.payload.token,
      };
    case constants.LOAD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case constants.LOG_OUT:
      localStorage.removeItem("token");
      localStorage.removeItem("login_date", action.payload.login_date);
      return {
        ...state,
        user: null,
      };
    default:
      return { ...state };
  }
};

export default authReducer;
