const initialState = {
  data:1,
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REPOSITORY1":
      return {
        ...state,
        data: state.data + 1,
      };

    default:
      return state;
  }
};

export default todos;
