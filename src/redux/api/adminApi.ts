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

    // Get single user
    getUser: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    // Update a user
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

    // Get all admin stats
    getAllAdminStats: build.query({
      query: () => ({
        url: "/stats",
        method: "GET",
      }),
      providesTags: [tagTypes.stats],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useGetAllAdminStatsQuery,
} = userApi;
