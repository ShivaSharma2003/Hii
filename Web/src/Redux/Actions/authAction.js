import * as authConstant from "../Constant/AuthConstants";
import axios from "../../Axios";

const registerAction =
  (email, userName, password, fullName) => async (dispatch) => {
    const options = { email, userName, password, fullName };
    try {
      dispatch({ type: authConstant.USER_REGISTER_REQUEST });
      const { data } = await axios.post("/auth/api/register/user", options);
      dispatch({ type: authConstant.USER_REGISTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: authConstant.USER_REGISTER_FAILED, error: error });
    }
  };

const loginAction = (email, password) => async (dispatch) => {
  const options = { email, password };
  try {
    dispatch({ type: authConstant.USER_LOGIN_REQUEST });
    const { data } = await axios.post("/auth/api/login/user", options);
    dispatch({ type: authConstant.USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: authConstant.USER_LOGIN_FAILED, error: error });
  }
};

export { registerAction, loginAction };
