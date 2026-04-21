import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import { toolItemSlice } from "./toolItem/toolItemSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  toolItem: toolItemSlice,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export default persistedReducers;
