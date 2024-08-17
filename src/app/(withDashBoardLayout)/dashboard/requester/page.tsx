// File: /pages/admin.tsx
"use client";

import DBTable from "@/components/Dashboard/DBTable/DBTable";
import LoadingButton from "@/components/UI/Button/LoadingButton";
import { useGetAllAdminStatsQuery } from "@/redux/api/adminApi";
import { useGetAllRequestQuery } from "@/redux/api/userApi";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

// Register required components with Chart.js
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

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
  const { data: requests, isLoading, refetch } = useGetAllRequestQuery({});
  const {
    data: stats,
    isLoading: isLoadingStats,
    refetch: refetchStats,
  } = useGetAllAdminStatsQuery({});

  if (requests?.length <= 0) {
    return (
      <p className="text-5xl py-20 text-center flex items-center justify-center font-bold text-teal-500">
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
  const barChartData = {
    labels: ["Pending", "Approved", "Rejected"],
    datasets: [
      {
        label: "Requests",
        data: [
          stats?.totalPendingRequests || 0,
          stats?.totalApprovedRequests || 0,
          stats?.totalRejectedRequests || 0,
        ],
        backgroundColor: ["#a4c2f4", "#4a86e8", "#666666"],
      },
    ],
  };

  const pieChartData = {
    labels: ["Total Requests", "Accepted Donations"],
    datasets: [
      {
        data: [stats?.totalRequests || 0, stats?.totalApprovedRequests || 0],
        backgroundColor: ["#a4c2f4", "#4a86e8"],
      },
    ],
  };

  const lineChartData = {
    labels:
      stats?.donations?.map((donation: { date: string }) => donation.date) ||
      [],
    datasets: [
      {
        label: "Request",
        data:
          stats?.donations?.map(
            (donation: { count: number }) => donation.count
          ) || [],
        borderColor: "#1e88e5",
        fill: false,
      },
    ],
  };

  return (
    <div className="container mx-auto p-8">
      {isLoading || isLoadingStats ? (
        <LoadingButton />
      ) : (
        <>
          {/* Charts Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-teal-500 text-center mb-6">
              All Blood Request Statistics
            </h2>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              {/* Bar chart */}
              <div className="bg-teal-900 p-4 rounded-lg shadow-md w-full md:w-1/2 h-96">
                <Bar data={barChartData} />
              </div>

              {/* Pie chart */}
              <div className="bg-teal-900 p-4 rounded-lg shadow-md w-full md:w-1/2 h-96">
                <Pie data={pieChartData} />
              </div>
            </div>

            {/* Line chart */}
            <h1 className="text-xl text-teal-500 font-semibold text-center my-8">
              All Send Request In The Last One Year
            </h1>
            <div className="bg-teal-900 p-4 rounded-lg shadow-md w-full mt-6 h-96">
              <Line data={lineChartData} />
            </div>
            {/* Existing table */}
            <h1 className="text-xl text-teal-500 font-semibold text-center my-8">
              All Requests To Donors
            </h1>
            <DBTable columns={columns} data={newData} />
          </div>
        </>
      )}
    </div>
  );
};

export default RequesterPage;
