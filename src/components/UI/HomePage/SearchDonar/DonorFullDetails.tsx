"use client";
import profileImg from "@/assets/profile.png";
import useUserInfo from "@/hooks/useUserInfo";
import { Donor } from "@/types";
import Image from "next/image";
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
      <div className="card shadow-xl text-black">
        <figure>
          <Image src={profileImg} alt="profile" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            Donor Name:{" "}
            <span className="font-bold text-gray-800">{donor?.name}</span>
          </h2>
          <p>
            {" "}
            Blood Type:{" "}
            <span className="font-normal text-gray-800">
              {donor?.bloodType}
            </span>
          </p>
          <p>
            Availability Status:{" "}
            <span className="font-normal text-gray-800">
              {availabilityStatus}
            </span>
          </p>
          <p>
            Location:{" "}
            <span className="font-normal text-gray-800">{donor?.location}</span>
          </p>
          <div className="card-actions justify-end">
            {isClient && userInfo?.role === "requester" ? (
              <Link
                href={`/dashboard/requester/create-request?donorId=${donor.id}`}
              >
                <button className="btn text-white bg-teal-500 font-bold mt-5 text-left btn-sm">
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
