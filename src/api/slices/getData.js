import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";
export const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: baseQuery,
  tagTypes: ["posts"],

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page) => `/posts?page=${page}`,
      providesTags: ["posts"],
    }),
    getRepairPosts: builder.query({
      query: (page) => `/posts/repair?page=${page}`,
      providesTags: ["posts"],
    }),
    getInvestmentPosts: builder.query({
      query: (page) => `/posts/investment?page=${page}`,
      providesTags: ["posts"],
    }),
    getDesignPosts: builder.query({
      query: (page) => `/posts/design?page=${page}`,
      providesTags: ["posts"],
    }),
    getPostDetail: builder.query({
      query: (slug) => `/posts/detail/${slug}`,
      providesTags: ["posts"],
    }),
    getPostById: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: ["posts"],
    }),
  }),
});
export const {
  useGetPostsQuery,
  useGetDesignPostsQuery,
  useGetRepairPostsQuery,
  useGetInvestmentPostsQuery,
  useGetPostByIdQuery,
  useGetPostDetailQuery,
} = postsApi;
