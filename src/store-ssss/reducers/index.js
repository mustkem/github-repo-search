import { combineReducers } from "redux";

import repositories from "./repositories";

const rootReducer = combineReducers({
  repositories,
});

export default rootReducer;
