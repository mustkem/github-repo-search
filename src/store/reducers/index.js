import { combineReducers } from "redux";
import repos from "./repos";
import user from "./user";

const rootReducer = combineReducers({
  user,
  repos,
});
export default rootReducer;
