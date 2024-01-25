import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { musicReducer } from "./reducers/musicReducer";
import { favReducer } from "./reducers/favReducer";
import { errorReducer } from "./reducers/errorReducer";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  music: musicReducer,
  favs: favReducer,
  errors: errorReducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ["favs"]
  },
  rootReducer
);


const store = configureStore({
  reducer: persistedReducer,
});

export const persistedStore = persistStore(store);

export default store;
