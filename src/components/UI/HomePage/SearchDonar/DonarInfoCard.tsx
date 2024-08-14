import { Donor } from "@/types";
import Link from "next/link";

const DonarInfoCard = ({ donor }: { donor: Donor }) => {
  const availabilityStatus = donor?.availability
    ? "Available"
    : "Not Available";

  return (
    <>
      <div className="card mb-4 rounded-sm shadow-lg shadow-slate-300 bg-pink-100">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-teal-500">
            Donor Name:{" "}
            <span className="font-bold text-gray-800">{donor?.name}</span>
          </h2>
          <p className="font-bold text-teal-500 text-sm">
            Blood Type:{" "}
            <span className="font-normal text-gray-800">
              {donor?.bloodType}
            </span>
          </p>
          <p className="font-bold text-teal-500 text-sm">
            Availability Status:{" "}
            <span className="font-normal text-gray-800">
              {availabilityStatus}
            </span>
          </p>
          <p className="font-bold text-teal-500 text-sm">
            Location:{" "}
            <span className="font-normal text-gray-800">{donor?.location}</span>
          </p>

          <div className="card-actions justify-end">
            <Link href={`/donors/${donor.id}`}>
              <button className="btn text-white bg-teal-500 font-bold btn-sm">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonarInfoCard;
