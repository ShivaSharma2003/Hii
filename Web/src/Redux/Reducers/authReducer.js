import * as authConstant from "../Constant/AuthConstants";

const loginReducer = (
  state = {
    loading: false,
    loggedIn: false,
    success: false,
    error: null,
    token: null,
  },
  action
) => {
  switch (action.type) {
    case authConstant.USER_LOGIN_REQUEST:
      return { loading: true };
    case authConstant.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        loggedIn: true,
        success: true,
        token: action.payload,
      };
    case authConstant.USER_LOGIN_FAILED:
      return { error: action.error, loading: false };
    default:
      return state;
  }
};

const registerReducer = (
  state = {
    loading: false,
    success: false,
    error: false,
    signedUp: false,
    register: null,
  },
  action
) => {
  switch (action.type) {
    case authConstant.USER_REGISTER_REQUEST:
      return { loading: true };
    case authConstant.USER_REGISTER_SUCCESS:
      return {
        loading: false,
        success: true,
        signedUp: true,
        register: action.payload,
      };
    case authConstant.USER_REGISTER_FAILED:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export { loginReducer, registerReducer };
