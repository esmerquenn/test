import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";
export const brandApi = createApi({
  reducerPath: "brand",
  baseQuery:baseQuery,
  tagTypes: ["brand"],
  endpoints: (builder) => ({
    getBrand: builder.query({
      query: () => "/brands",
      providesTags: ["brand"],
    }),
  }),
});
export const {useGetBrandQuery}= brandApi
