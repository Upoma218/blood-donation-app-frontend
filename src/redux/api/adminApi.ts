import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/users",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.user],
    }),

    //get single user
    getUser: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    // update an user
    updateUser: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/manage-user/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserQuery, useUpdateUserMutation } =
  userApi;
