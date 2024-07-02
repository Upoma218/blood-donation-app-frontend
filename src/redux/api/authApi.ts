import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";
const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    changePassword: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/change-password`,
        method: "POST",
        contentType: "application/json",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useChangePasswordMutation } = authApi;
