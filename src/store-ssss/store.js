import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["repositories"],
// };

const persistConfig = {
  key: 'root',
  storage,
}

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
 

export const persistor = persistStore(store);

export default store;