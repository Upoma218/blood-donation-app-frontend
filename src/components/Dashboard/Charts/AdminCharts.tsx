import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdminCharts = ({ lineData, barData, pieData }: any) => {
  return (
    <div className="space-y-6">
      {/* Charts Container */}
      <h1 className="text-xl text-teal-500 font-semibold text-center mb-8">
        User Stats
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {/* Bar Chart */}
        <div className="bg-teal-900 p-4 rounded-md shadow-md ">
          <Bar
            data={barData}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
              maintainAspectRatio: false,
            }}
          />
        </div>

        {/* Pie Chart */}
        <div className="bg-teal-900 p-4 rounded-md shadow-md ">
          <Pie
            data={pieData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
                tooltip: {
                  callbacks: {
                    label: (context) => `${context.label}: ${context.raw}`,
                  },
                },
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
      <h1 className="text-xl text-teal-500 font-semibold text-center my-8">
        User Status
      </h1>

      {/* Line Chart */}
      <div className="bg-teal-900 p-4 rounded-md h-full shadow-md ">
        <Line
          data={lineData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.label}: ${context.raw}`,
                },
              },
            },
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

export default AdminCharts;
