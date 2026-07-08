import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import toolItemSlice from "./toolItemSlice";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  toolItems: toolItemSlice,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
