// File: /pages/admin.tsx
"use client";

import DBTable from "@/components/Dashboard/DBTable/DBTable";
import LoadingButton from "@/components/UI/Button/LoadingButton";
import {
  useGetAllUsersQuery,
  useUpdateUserMutation,
} from "@/redux/api/adminApi";
import { Status, UserRole } from "@/types/common";

/* eslint-disable react/no-unescaped-entities */

const columns = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Phone", accessor: "phone" },
  { header: "Location", accessor: "location" },
  { header: "Role", accessor: "role" },
  { header: "Active Status", accessor: "status" },
  { header: "Blood Type", accessor: "bloodType" },
  {
    header: "Availability",
    accessor: "availability",
    render: (value: boolean) => (value ? "Yes" : "No"),
  },
];

const AdminPage = () => {
  const { data: users, isLoading } = useGetAllUsersQuery({});
  const [updateUser] = useUpdateUserMutation({});
  const updateStatus = (id: string, status: Status) => {
    updateUser({
      id,
      body: {
        status,
      },
    });
  };

  const updateUserRole = (id: string, role: UserRole) => {
    updateUser({
      id,
      body: {
        role,
      },
    });
  };
  const newData = users?.map((user: any) => {
    return {
      ...user,
      status: (
        <select
          defaultValue={user.status}
          onChange={(e) => updateStatus(user.id, e.target.value as any)}
        >
          <option value="active">Active</option>
          <option value="deactive">Deactive</option>
        </select>
      ),
      role: (
        <select
          value={user.role}
          onChange={(e) => updateUserRole(user.id, e.target.value as UserRole)}
        >
          <option value="donor">Donor</option>
          <option value="admin">Admin</option>
          <option value="requester">Requester</option>
        </select>
      ),
    };
  });
  console.log(users);
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

export default AdminPage;
