import profileImg from "@/assets/profile.png";
import { Donor } from "@/types";
import Image from "next/image";
import Link from "next/link";

const DonarInfoCard = ({ donor }: { donor: Donor }) => {
  const availabilityStatus = donor?.availability
    ? "Available"
    : "Not Available";

  return (
    <>
      <div className="card card-side shadow-xl text-black flex-col lg:flex-row">
        <figure>
          <Image src={profileImg} alt="profile" className="w-48 h-full" />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title text-black">
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
