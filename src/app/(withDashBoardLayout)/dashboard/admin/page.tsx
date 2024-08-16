"use client";

import AdminCharts from "@/components/Dashboard/Charts/AdminCharts";
import DBTable from "@/components/Dashboard/DBTable/DBTable";
import LoadingButton from "@/components/UI/Button/LoadingButton";
import {
  useGetAllAdminStatsQuery,
  useGetAllUsersQuery,
  useUpdateUserMutation,
} from "@/redux/api/adminApi";
import { Status, UserRole } from "@/types/common";

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
  const { data: users, isLoading: isUsersLoading } = useGetAllUsersQuery({});
  const { data: stats, isLoading: isStatsLoading } = useGetAllAdminStatsQuery(
    {}
  );

  const [updateUser] = useUpdateUserMutation({});

  const updateStatus = (id: string, status: Status) => {
    updateUser({
      id,
      body: { status },
    });
  };

  const updateUserRole = (id: string, role: UserRole) => {
    updateUser({
      id,
      body: { role },
    });
  };

  const newData = users
    ? users.map((user: any) => ({
        ...user,
        status: (
          <select
            defaultValue={user.status}
            onChange={(e) => updateStatus(user.id, e.target.value as Status)}
            className="bg-teal-950 text-white"
          >
            <option value="active">Active</option>
            <option value="deactive">Deactive</option>
          </select>
        ),
        role: (
          <select
            value={user.role}
            onChange={(e) =>
              updateUserRole(user.id, e.target.value as UserRole)
            }
            className="bg-teal-950 text-white"
          >
            <option value="donor">Donor</option>
            <option value="admin">Admin</option>
            <option value="requester">Requester</option>
          </select>
        ),
      }))
    : [];

  const chartData = {
    lineData: {
      labels: [
        "Total Users",
        "Total Donors",
        "Total Requesters",
        "Total Available Donors",
        "Total Active Users",
        "Total Deactivated Users",
        "Total Unavailable Donors",
      ],
      datasets: [
        {
          label: "Admin Stats",
          data: [
            stats?.totalUsers,
            stats?.totalDonors,
            stats?.totalRequesters,
            stats?.totalAvailableDonors,
            stats?.totalActiveUsers,
            stats?.totalDeactivatedUsers,
            stats?.totalUnAvailableDonors,
          ],
          backgroundColor: "rgba(56, 189, 248, 0.2)",
          borderColor: "rgba(56, 189, 248, 1)",
          borderWidth: 1,
        },
      ],
    },
    barData: {
      labels: ["Total Users", "Total Donors", "Total Requesters"],
      datasets: [
        {
          label: "Count",
          data: [stats?.totalUsers, stats?.totalDonors, stats?.totalRequesters],
          backgroundColor: ["#0D9488", "#14B8A6", "#2DD4BF"],
        },
      ],
    },
    pieData: {
      labels: [
        "Total Available Donors",
        "Total Active Users",
        "Total Deactivated Users",
        "Total Unavailable Donors",
      ],
      datasets: [
        {
          label: "Distribution",
          data: [
            stats?.totalAvailableDonors,
            stats?.totalActiveUsers,
            stats?.totalDeactivatedUsers,
            stats?.totalUnAvailableDonors,
          ],
          backgroundColor: ["#741b47", "#e06666", "#a2c4c9", "#e6b8af"],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "white",
          },
        },
        y: {
          ticks: {
            color: "white",
          },
        },
      },
    },
  };

  return (
    <div className="container mx-auto p-8">
      {isStatsLoading ? (
        ""
      ) : (
        <AdminCharts
          lineData={chartData.lineData}
          barData={chartData.barData}
          pieData={chartData.pieData}
        />
      )}
      {isUsersLoading ? (
        <LoadingButton />
      ) : (
        <div>
          <h1 className="text-xl text-white font-bold text-center my-8">
            User Details Informations
          </h1>
          <div className="divider divider-accent"></div>
          <DBTable columns={columns} data={newData} />
        </div>
      )}
    </div>
  );
};

export default AdminPage;
