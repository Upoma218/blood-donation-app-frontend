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
      <div className="my-12 text-center divider divider-error">
        <h1 className="text-2xl font-bold border-2 border-red-700 text-red-700 p-3 inline-block bg-white bg-opacity-75">
          Donation Tips
        </h1>
      </div>
      <div className=" bg-pink-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl">
          <div className="flex flex-col items-center">
            <div className="text-4xl text-red-700 mb-2">
              <FaHandsHelping />
            </div>
            <p className="text-lg">
              Encourage friends, family, and colleagues to donate blood
              together.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-red-700 mb-2">
              <FaHandHoldingHeart />
            </div>
            <p className="text-lg">
              Educate yourself about blood donation and its impact on saving
              lives.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-red-700 mb-2">
              <FaArrowRight />
            </div>
            <p className="text-lg">
              Follow a healthy lifestyle by eating nutritious food and staying
              hydrated before donating blood.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-red-700 mb-2">
              <FaBed />
            </div>
            <p className="text-lg">
              Rest and relax after donating blood to replenish fluids and
              prevent any adverse reactions.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-red-700 mb-2">
              <FaHeartbeat />
            </div>
            <p className="text-lg">
              Spread awareness about the importance of blood donation in your
              community and encourage others to donate.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-red-700 mb-2">
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
