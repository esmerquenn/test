import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";

export const aboutApi = createApi({
  reducerPath: "aboutApi",
  baseQuery: baseQuery,
  tagTypes: ["detail"],
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => "/about/about/detail",
      providesTags: ["detail"],
    }),
  }),
});

export const { useGetAboutQuery } = aboutApi;
