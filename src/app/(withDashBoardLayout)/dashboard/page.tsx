"use client";

import userImg from "@/assets/perosn1.jpg";
import ProfileUpdateModal from "@/components/ProfileUpdateModal/ProfileUpdateModal";
import { useGetMYProfileQuery } from "@/redux/api/userApi";
import Image from "next/image";
import { useState } from "react";

// Define the type for the profile data

const MyProfile = () => {
  const { data, isLoading, refetch } = useGetMYProfileQuery("");
  const [isOpen, setIsOpen] = useState(false);

  console.log(isLoading);

  return (
    <div className="w-full flex flex-col bg-teal-700 min-h-screen">
      <div className="w-full bg-teal-950 p-6 shadow-md shadow-zinc-900 rounded-none mx-auto">
        <div className="relative rounded-md mx-auto w-32 h-32 flex justify-center items-center">
          <Image
            src={userImg}
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold my-4 text-white text-center">
          {data?.name}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-6 p-6">
        <p className="p-4 bg-teal-800 shadow-md shadow-zinc-900 rounded-md">
          <span className="font-semibold">Email:</span> {data?.email}
        </p>

        <p className="p-4 bg-teal-800 shadow-md shadow-zinc-900 rounded-md">
          <span className="font-semibold">Phone:</span> {data?.phone}
        </p>

        <p className="p-4 bg-teal-800 shadow-md shadow-zinc-900 rounded-md">
          <span className="font-semibold">Blood Type:</span> {data?.bloodType}
        </p>

        <p className="p-4 bg-teal-800 shadow-md shadow-zinc-900 rounded-md">
          <span className="font-semibold">Location:</span> {data?.location}
        </p>

        <p className="p-4 bg-teal-800 shadow-md shadow-zinc-900 rounded-md">
          <span className="font-semibold">Donate Blood:</span>{" "}
          {data?.isDonateBlood ? "Yes" : "No"}
        </p>

        <p className="p-4 bg-teal-800 shadow-md shadow-zinc-900 rounded-md">
          <span className="font-semibold">Availability:</span>{" "}
          {data?.availability ? "Available" : "Not Available"}
        </p>

        <p className="p-4 bg-teal-800 shadow-md shadow-zinc-900 rounded-md">
          <span className="font-semibold">Bio:</span> {data?.userProfile?.bio}
        </p>

        <p className="p-4 bg-teal-800 shadow-md shadow-zinc-900 rounded-md">
          <span className="font-semibold">Age:</span> {data?.userProfile?.age}
        </p>

        <p className="p-4 bg-teal-800 shadow-md shadow-zinc-900 rounded-md">
          <span className="font-semibold">Last Donation Date:</span>{" "}
          {data?.userProfile?.lastDonationDate}
        </p>
      </div>

      {/* Update Profile button */}
      <div className="flex justify-center">
        <button
          className="mx-6 p-4 bg-teal-800 shadow-md shadow-zinc-900 rounded-md font-bold text-white w-full mb-3"
          onClick={() => setIsOpen(true)}
        >
          Update Profile
        </button>
      </div>

      {/* Render the modal only when isOpen is true */}
      {isOpen && data && (
        <ProfileUpdateModal
          setOpen={setIsOpen}
          id="profileUpdateModal"
          defaultValues={{
            phone: data.phone,
            location: data.location,
            bio: data.userProfile.bio,
            age: data.userProfile.age,
            lastDonationDate: data.userProfile.lastDonationDate,
          }}
        />
      )}
    </div>
  );
};

export default MyProfile;
