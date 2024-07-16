import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";
export const employeeApi = createApi({
  reducerPath: "employee",
  baseQuery:baseQuery,
  tagTypes: ["employee"],
  endpoints: (builder) => ({
    getEmployee: builder.query({
      query: () => "/employee",
      providesTags: ["employee"],
    }),
  }),
});
export const {useGetEmployeeQuery}= employeeApi
