/* eslint-disable react/no-unescaped-entities */
import {
  FaArrowRight,
  FaBed,
  FaHandHoldingHeart,
  FaHandsHelping,
  FaHeartbeat,
  FaStar,
} from "react-icons/fa";

const DonationTips = () => {
  return (
    <div className="mt-6">
      <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold my-6 text-teal-500 text-center">
        Donation Tips
      </h1>
      <div className=" bg-teal-50 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl">
          <div className="flex flex-col items-center">
            <div className="text-4xl text-teal-500 mb-2">
              <FaHandsHelping />
            </div>
            <p className="text-lg">
              Encourage friends, family, and colleagues to donate blood
              together.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-teal-500 mb-2">
              <FaHandHoldingHeart />
            </div>
            <p className="text-lg">
              Educate yourself about blood donation and its impact on saving
              lives.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-teal-500 mb-2">
              <FaArrowRight />
            </div>
            <p className="text-lg">
              Follow a healthy lifestyle by eating nutritious food and staying
              hydrated before donating blood.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-teal-500 mb-2">
              <FaBed />
            </div>
            <p className="text-lg">
              Rest and relax after donating blood to replenish fluids and
              prevent any adverse reactions.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-teal-500 mb-2">
              <FaHeartbeat />
            </div>
            <p className="text-lg">
              Spread awareness about the importance of blood donation in your
              community and encourage others to donate.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-teal-500 mb-2">
              <FaStar />
            </div>
            <p className="text-lg">
              Volunteer at blood drives or local blood banks to support donation
              efforts and make a difference in the lives of others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationTips;
