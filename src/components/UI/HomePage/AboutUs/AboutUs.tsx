/* eslint-disable react/no-unescaped-entities */
import {
  FaBookOpen,
  FaGlobe,
  FaHandsHelping,
  FaHeart,
  FaLightbulb,
  FaMedal,
  FaStar,
  FaSun,
  FaUsers,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold my-6 text-red-700 text-center">
        About Us
      </h1>
      <p className="mb-6 mx-auto max-w-6xl w-2/3 text-center">
        At Donate Blood, our mission is clear: to bridge the gap between those
        who generously donate and those desperately in need. Through education,
        awareness, and facilitating donations, we strive to make a tangible
        impact on lives. Join us in this vital endeavor to save lives and spread
        hope.
      </p>
      <div className="bg-gradient-to-br from-red-600 to-red-800 text-center text-white py-6">
        <div className="divider divider-warning my-12">
          <h1 className="text-2xl font-bold border border-1 border-white p-3">
            Our Mission
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl">
          <div className="flex flex-col items-center">
            <div className="text-4xl text-yellow-400 mb-2">
              <FaHandsHelping />
            </div>
            <p className="text-lg">
              Bridge the gap between donors and recipients.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-yellow-400 mb-2">
              <FaHeart />
            </div>
            <p className="text-lg">
              Provide lifesaving education and awareness.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-yellow-400 mb-2">
              <FaBookOpen />
            </div>
            <p className="text-lg">Facilitate the donation process.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-yellow-400 mb-2">
              <FaUsers />
            </div>
            <p className="text-lg">Create a positive impact on lives.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-yellow-400 mb-2">
              <FaLightbulb />
            </div>
            <p className="text-lg">
              Foster a culture of giving and compassion.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-yellow-400 mb-2">
              <FaGlobe />
            </div>
            <p className="text-lg">
              Extend our reach to communities worldwide.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-yellow-400 mb-2">
              <FaMedal />
            </div>
            <p className="text-lg">
              Recognize and honor our donors' contributions.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-yellow-400 mb-2">
              <FaStar />
            </div>
            <p className="text-lg">
              Strive for excellence in our lifesaving efforts.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-yellow-400 mb-2">
              <FaSun />
            </div>
            <p className="text-lg">Bring light and hope to those in need.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
