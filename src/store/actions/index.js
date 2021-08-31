import {
  ADD_REPO,
  DELETE_REPO,
  FETCH_USER,
  FETCH_USER_SUCCESS,
} from "../types";
import axios from "axios";
import config from "../../config";

export const onAddRepo = (message) => ({
  type: ADD_REPO,
  message,
});

export const addRepo = (payload) => (dispatch) => {
  return new Promise(() => {
    //Call api here to update the selected records here
    dispatch(onAddRepo(payload));
  });
};

export const onDeleteRepo = (id) => ({
  type: DELETE_REPO,
  id,
});

export const deleteRepo = (id) => (dispatch) => {
  return new Promise(() => {
    //Call api here to delete records here
    dispatch(onDeleteRepo(id));
  });
};

export const onFetchUserInit = () => ({
  type: FETCH_USER,
});

export const onFetchUser = (payload) => ({
  type: FETCH_USER_SUCCESS,
  payload,
});

export const fetchUser = () => (dispatch) => {
  dispatch(onFetchUserInit());
  return new Promise((res, rej) => {
    axios
      .get(`${config.API_URL}user`, {
        headers: {
          authorization: `token ${localStorage.getItem("access_token_github")}`,
        },
      })
      .then(function (response) {
        dispatch(onFetchUser({ isAuthenticated: true, ...response.data }));
        res(response);
      })
      .catch(function (error) {
        dispatch(onFetchUser({ isAuthenticated: false }));
        rej(error);
      });
  });
};
