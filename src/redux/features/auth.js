const initialState = {
  authData: {
    login: "developer21",
    password: "123456",
  },
  user: {
    login: "",
    password: "",
  },
  isAuth: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "SET_AUTH": {
      return {
        ...state,
        isAuth: action.payload,
      };
    }
    default:
      return state;
  }
};

export default auth;

export const setUser = (data) => {
  return {
    type: "SET_USER",
    payload: data,
  };
};

export const setAuth = (data) => {
  return {
    type: "SET_AUTH",
    payload: data,
  };
};

export const selectUser = (state) => state.auth.user;
export const selectAuthData = (state) => state.auth.authData;
export const selectIsAuth = (state) => state.auth.isAuth;
