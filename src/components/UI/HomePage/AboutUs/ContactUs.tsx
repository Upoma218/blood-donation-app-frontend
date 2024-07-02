import contactImage from "@/assets/BloodDonation.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";

const ContactUs = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-100 to-red-200">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold text-red-600 text-center mb-12">
          Contact Us
        </h1>
        <div className="card card-side bg-base-100 shadow-xl flex flex-col lg:flex-row mx-auto">
          <figure className="w-1/4">
            <Image
              src={contactImage}
              alt="Contact Image"
              layout="responsive"
              objectFit="cover"
              className="rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
            />
          </figure>
          <div className="card-body w-full lg:w-1/2 p-6 lg:p-12">
            <div className="divider divider-error mb-4">
              <h2 className="text-xl lg:text-xl font-semibold text-red-700 p-1 border-2 border-red-700">
                Contact Information
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 text-white bg-red-700 p-6 rounded-md">
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-2xl mr-3" />
                <div>
                  <h3 className="text-lg font-semibold">Email:</h3>
                  <p>contact@ourorganization.com</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-2xl mr-3" />
                <div>
                  <h3 className="text-lg font-semibold">Phone:</h3>
                  <p>+880123456789</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-2xl mr-3" />
                <div>
                  <h3 className="text-lg font-semibold">Address:</h3>
                  <p>123 Donation St, Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <RiUserFollowFill className="text-2xl mr-3" />
                <div>
                  <h3 className="text-lg font-semibold">Follow Us:</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="text-3xl hover:text-red-700 transition duration-300" />
                    </Link>
                    <Link
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="text-3xl hover:text-red-700 transition duration-300" />
                    </Link>
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-3xl hover:text-red-700 transition duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
