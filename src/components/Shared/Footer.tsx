import AppLogo from "@/assets/BloodDonation.png";
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

const Footer = () => {
  return (
    <footer className="footer p-10 bg-red-700 text-white">
      <aside>
        <Image
          src={AppLogo}
          alt="Logo"
          height={50}
          width={50}
          className="bg-pink-100 rounded-full"
        />
        <p className="font-bold text-2xl text-yellow-400">Donate Blood</p>
        <p>
          Life is in Your Veins: Share It! Be The Lifeline! <br /> Donate Blood,
          Save Lives!
        </p>

        <p className="text-center font-semibold mt-1 text-yellow-400">
          Copyright © 2024 - All right reserved By Donate Blood
        </p>
      </aside>
      <nav>
        <h6 className="font-bold text-2xl text-yellow-400  mb-3">
          Contact Information
        </h6>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-xl mr-3 text-yellow-400" />
              <div>
                <h3 className="font-semibold">Email:</h3>
                <p>contact@ourorganization.com</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-xl mr-3 text-yellow-400" />
              <div>
                <h3 className="font-semibold">Phone:</h3>
                <p>+880123456789</p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-xl mr-3 text-yellow-400" />
              <div>
                <h3 className="font-semibold">Address:</h3>
                <p>123 Donation St, Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <RiUserFollowFill className="text-xl mr-3 text-yellow-400" />
              <div>
                <h3 className="font-semibold">Follow Us:</h3>
                <div className="flex space-x-4 mt-2">
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-xl hover:text-red-700 transition duration-300" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-xl hover:text-red-700 transition duration-300" />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-xl hover:text-red-700 transition duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav>
        <h6 className="font-bold text-2xl text-yellow-400 mb-3">Legal</h6>
        <Link href="/terms" className="link link-hover">
          Terms of use
        </Link>
        <Link href="/terms" className="link link-hover">
          Privacy policy
        </Link>
        <Link href="/terms" className="link link-hover">
          Cookie policy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
