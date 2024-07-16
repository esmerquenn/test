import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";

export const postContactApi = createApi({
  reducerPath: "contact",
  baseQuery:baseQuery,
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    postContact: builder.mutation({
      query: (body) => ({
        url: "/contact",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});
export const {usePostContactMutation}=postContactApi
