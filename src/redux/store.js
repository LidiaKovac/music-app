import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { musicReducer } from "./reducers/musicReducer";
import { favReducer } from "./reducers/favReducer";
import { errorReducer } from "./reducers/errorReducer";
const rootReducer = combineReducers({
  music: musicReducer,
  favs: favReducer,
  errors: errorReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
