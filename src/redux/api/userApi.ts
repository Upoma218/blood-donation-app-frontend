import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createRequest: build.mutation({
      query: (data) => ({
        url: "/donation-request",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.requestData],
    }),
    getMYProfile: build.query({
      query: () => {
        return {
          url: "/my-profile",
          method: "GET",
        };
      },
      providesTags: [tagTypes.user],
    }),
    getAllRequest: build.query({
      query: () => {
        return {
          url: "/donation-request",
          method: "GET",
        };
      },
      providesTags: [tagTypes.requester],
    }),
    updateMYProfile: build.mutation({
      query: (data) => {
        return {
          url: "/my-profile",
          method: "PUT",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetMYProfileQuery,
  useUpdateMYProfileMutation,
  useCreateRequestMutation,
  useGetAllRequestQuery,
} = userApi;
