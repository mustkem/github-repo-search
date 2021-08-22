import { ADD_REPO, DELETE_REPO } from "../types";

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
