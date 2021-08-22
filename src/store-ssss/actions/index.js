import httpInstance from "../../helpers/httpClient";
import { actionTypes } from "../types";

// export const onGetRepositories = (data) => {
//   return {
//     type: actionTypes.GET_REPOSITORIES,
//     payload: data,
//   };
// };

// export const getRepositories = (params) => (dispatch) => {
//   return new Promise((res, rej) => {
//     const { searchField } = params;
//     httpInstance({
//       method: "get",
//       url: `search/repositories?q=${searchField}`,
//       headers: {
//         accept: "application/vnd.github.v3+json",
//       },
//     })
//       .then(function (response) {
//         dispatch(onGetRepositories(response.data));
//         res(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//         rej();
//       });
//   });
// };

export const onGetRepositoryDetail = (data) => {
  return {
    type: actionTypes.GET_REPOSITORY_DETAIL,
    payload: data,
  };
};

export const getRepositoryDetail = (id) => (dispatch) => {
  return new Promise((res, rej) => {
    httpInstance({
      method: "get",
      url: "/products/" + id,
    })
      .then(function (response) {
        dispatch(onGetRepositoryDetail(response.data));
        res(response);
      })
      .catch(function (error) {
        console.log(error);
        rej();
      });
  });
};

export const onDeleteRepository = (payload) => {
  return {
    type: actionTypes.DELETE_REPOSITORY,
    payload,
  };
};

export const deleteRepository = (id) => (dispatch) => {
  return new Promise(() => {
    //Call api here
    dispatch(onDeleteRepository({ id }));
  });
};

export const onAddRepository = (payload) => {
  return {
    type: actionTypes.ADD_REPOSITORY,
    payload,
  };
};

export const addRepository = (payload) => (dispatch) => {
  return new Promise(() => {
    //Call api here
    dispatch(onAddRepository(payload));
  });
};
