// File: /pages/admin.tsx
"use client";

import DBTable from "@/components/Dashboard/DBTable/DBTable";
import LoadingButton from "@/components/UI/Button/LoadingButton";
import { useUpdateRequestStatusMutation } from "@/redux/api/donorsApi";
import { useGetAllRequestQuery } from "@/redux/api/userApi";
import { Status } from "@/types/common";

/* eslint-disable react/no-unescaped-entities */
/* 
id: 'f024cb72-487c-4328-b923-345f9d7f518f',
donorId: 'e85fe570-07c8-429f-ac35-5688659a2b49',
requesterId: '6d1848f0-48c6-4199-a76d-8e52b5841e96',
dateOfDonation: '2024-06-20',
hospitalName: 'Labaid',
hospitalAddress: 'Dhanmondi',
reason: 'Fever',
requestStatus: 'APPROVED',
createdAt: '2024-06-08T16:42:03.057Z',
updatedAt: '2024-06-08T17:06:56.380Z',
requester: {
  id: '6d1848f0-48c6-4199-a76d-8e52b5841e96',
  name: 'Requester',
  email: 'requester@gmail.com',
  phone: '01712345678',
  location: 'Dhaka',
  bloodType: 'A-',
  availability: false
} */

const columns = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Phone", accessor: "phone" },
  { header: "Location", accessor: "location" },
  { header: "Reason", accessor: "reason" },
  { header: "Hospital Name", accessor: "hospitalName" },
  { header: "Hospital Address", accessor: "hospitalAddress" },
  { header: "Date of Donation", accessor: "dateOfDonation" },
  { header: "Active Status", accessor: "status" },
  { header: "Blood Type", accessor: "bloodType" },
  {
    header: "Availability",
    accessor: "availability",
    render: (value: boolean) => (value ? "Yes" : "No"),
  },
];

const DonorPage = () => {
  const { data: requests, isLoading } = useGetAllRequestQuery({});
  const [updateRequestStatus] = useUpdateRequestStatusMutation({});
  const updateStatus = (id: string, status: Status) => {
    updateRequestStatus({
      id,
      body: {
        status,
      },
    });
  };

  if (requests?.length <= 0) {
    return (
      <p className="text-5xl text-center my-12 font-bold text-pink-700">
        You Have No Request
      </p>
    );
  }

  const newData = requests?.map((request: any) => {
    return {
      ...request,

      name: request?.requester?.name,
      email:
        request?.requestStatus === "APPROVED"
          ? request?.requester?.email
          : "Request doesn't approved yet",
      phone:
        request?.requestStatus === "APPROVED"
          ? request?.requester?.phone
          : "Request doesn't approved yet",
      location: request?.requester?.location,
      bloodType: request?.requester?.bloodType,
      status: (
        <select
          defaultValue={request?.requestStatus}
          onChange={(e) => updateStatus(request.id, e.target.value as any)}
        >
          <option value="PENDING">PENDING</option>
          <option value="APPROVED">APPROVED</option>
          <option value="REJECTED">REJECTED</option>
        </select>
      ),
    };
  });
  console.log(requests);
  return (
    <div className="container mx-auto p-8">
      {isLoading ? (
        <LoadingButton />
      ) : (
        <DBTable columns={columns} data={newData} />
      )}
    </div>
  );
};

export default DonorPage;
