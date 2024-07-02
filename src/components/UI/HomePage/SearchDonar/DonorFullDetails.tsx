"use client";
import useUserInfo from "@/hooks/useUserInfo";
import { Donor } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

const DonorFullDetails = ({ donor }: { donor: Donor }) => {
  const { userInfo } = useUserInfo();
  console.log({ userInfo });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const availabilityStatus = donor?.availability
    ? "Available"
    : "Not Available";

  return (
    <div className="p-4 justify-center align-middle">
      <div className="card m-4 rounded-lg  border-1 border-slate-100 lg:w-1/3 mx-auto ">
        <div className="card-body rounded-md border-2 border-slate-400 items-left">
          <h2 className="card-title text-red-700">General Information</h2>

          <p className="font-bold text-gray-700">
            Donor Name:{" "}
            <span className="font-normal text-gray-800">{donor?.name}</span>
          </p>
          <p className="font-bold text-gray-700">
            Blood Type:{" "}
            <span className="font-normal text-gray-800">
              {donor?.bloodType}
            </span>
          </p>
          <p className="font-bold text-gray-700">
            Location:{" "}
            <span className="font-normal text-gray-800">{donor?.location}</span>
          </p>
          <p className="font-bold text-gray-700">
            Availability Status:{" "}
            <span className="font-normal text-gray-800">
              {availabilityStatus}
            </span>
          </p>

          <div className="card-actions justify-end">
            {isClient && userInfo?.role === "requester" ? (
              <Link
                href={`/dashboard/requester/create-request?donorId=${donor.id}`}
              >
                <button className="btn text-white bg-red-700 font-bold mt-5 text-left btn-sm">
                  Request For Blood
                </button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorFullDetails;
