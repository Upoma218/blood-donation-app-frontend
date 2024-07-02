// File: /pages/admin.tsx
"use client";

import DBTable from "@/components/Dashboard/DBTable/DBTable";
import LoadingButton from "@/components/UI/Button/LoadingButton";
import { useGetAllRequestQuery } from "@/redux/api/userApi";

/* eslint-disable react/no-unescaped-entities */

/* 
 {
      id: '082c4563-a13c-4197-a3c8-eef89a74e84e',
      donorId: '13f750ad-2ddd-4cc9-b8a4-d8a6f3d7a10c',
      requesterId: '6d1848f0-48c6-4199-a76d-8e52b5841e96',
      dateOfDonation: '2024-06-13',
      hospitalName: 'Labaid',
      hospitalAddress: 'Dhanmondi',
      reason: 'Fever',
      requestStatus: 'PENDING',
      createdAt: '2024-06-08T13:25:28.201Z',
      updatedAt: '2024-06-08T13:25:28.201Z',
      donor: {
        id: '13f750ad-2ddd-4cc9-b8a4-d8a6f3d7a10c',
        name: 'cccccc',
        email: 'cccccc@gmail.com',
        phone: '01742249000',
        location: 'Dhaka',
        bloodType: 'AB-',
        availability: false
      }
 */

const columns = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Phone", accessor: "phone" },
  {
    header: "Location",
    accessor: "location",
  },

  { header: "Reason", accessor: "reason" },
  { header: "Hospital Name", accessor: "hospitalName" },
  { header: "Hospital Address", accessor: "hospitalAddress" },
  { header: "Date of Donation", accessor: "dateOfDonation" },
  { header: "Active Status", accessor: "requestStatus" },
  { header: "Blood Type", accessor: "bloodType" },
  {
    header: "Availability",
    accessor: "availability",
    render: (value: boolean) => (value ? "Yes" : "No"),
  },
];

const RequesterPage = () => {
  const { data: requests, isLoading } = useGetAllRequestQuery({});

  if (requests?.length <= 0) {
    return (
      <p className="text-5xl text-center my-12 font-bold text-pink-700">
        You Have No Request
      </p>
    );
  }

  console.log(requests);
  const newData = requests?.map((request: any) => {
    return {
      ...request,
      name: request?.donor?.name,
      email:
        request?.requestStatus === "APPROVED"
          ? request?.donor?.email
          : "Request doesn't approved yet",
      phone:
        request?.requestStatus === "APPROVED"
          ? request?.donor?.phone
          : "Request doesn't approved yet",
      location: request?.donor?.location,
      bloodType: request?.donor?.bloodType,
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

export default RequesterPage;
