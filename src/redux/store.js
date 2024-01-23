import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { musicReducer } from "./reducers/musicReducer";
import { favReducer } from "./reducers/favReducer";
const rootReducer = combineReducers({
  music: musicReducer,
  favs: favReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
