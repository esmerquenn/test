import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./slices/getData";
import { postContactApi } from "./slices/postContact";
import { employeeApi } from "./slices/employee";
import { aboutApi } from "./slices/about";
import { setupListeners } from "@reduxjs/toolkit/query";
import { brandApi } from "./slices/brend";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [postContactApi.reducerPath]: postContactApi.reducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
    [aboutApi.reducerPath]: aboutApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aboutApi.middleware, postsApi.middleware, postContactApi.middleware, employeeApi.middleware, brandApi.middleware),
});
setupListeners(store.dispatch);
