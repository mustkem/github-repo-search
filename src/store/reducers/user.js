import * as types from "../types";

const initialState = {
  data: null,
  loading: true,
  error: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case types.FETCH_USER: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};

export default user;
