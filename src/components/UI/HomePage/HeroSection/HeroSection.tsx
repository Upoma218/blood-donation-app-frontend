/* eslint-disable react/no-unescaped-entities */
import HeroImage from "@/assets/Blood donation-pana.svg";
import bgImg from "@/assets/bg.jpg";
import Image from "next/image";
import SearchButton from "../SearchDonar/SearchButton";

const HeroSection = () => {
  return (
    <div
      className="relative hero bg-contain bg-center"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm"></div>

      <div className="relative hero-content flex-col lg:flex-row-reverse">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image src={HeroImage} alt="Hero Image" layout="responsive" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700">
            Life is in Your Veins: Share It! Be The Lifeline!
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-3 text-teal-500">
            Your <span className="text-red-600">Blood</span> Matters!
          </h1>
          <p className="my-5 text-black">
            Every drop counts in the journey of hope. Be the beacon of light for
            someone in their darkest hour. Your blood donation is not just a
            gesture; it's a lifeline. Join us in this noble mission to save
            lives and ignite hope. Together, we can make a difference that lasts
            a lifetime.
          </p>
          <SearchButton></SearchButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
