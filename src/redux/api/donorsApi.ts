import { Donor } from "@/types";
import { IMeta } from "@/types/common";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const donorApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    getAllDonors: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/donors",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: Donor[], meta: IMeta) => {
        console.log({ response });

        return {
          donors: response,
          meta,
        };
      },
      providesTags: [tagTypes.donors],
    }),

    //get single donor
    getDonor: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.donors],
    }),
    // update a donor
    updateDonor: build.mutation({
      query: (data: any) => {
        // console.log(data);
        return {
          url: `/donor/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.donors, tagTypes.requester],
    }),
    updateRequestStatus: build.mutation({
      query: (data: any) => {
        console.log(data);
        return {
          url: `/donation-request/${data.id}`,
          method: "PUT",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.donors, tagTypes.requester],
    }),
  }),
});

export const {
  useGetAllDonorsQuery,
  useGetDonorQuery,
  useUpdateDonorMutation,
  useUpdateRequestStatusMutation,
} = donorApi;
