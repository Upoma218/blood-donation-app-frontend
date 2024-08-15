/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import member1Photo from "@/assets/perosn1.jpg";
import member2Photo from "@/assets/perosn2.jpg";
import member3Photo from "@/assets/perosn3.jpg";

const TeamInformation = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Blood Donation Advocate",
      photo: member1Photo,
    },
    {
      name: "Jane Smith",
      position: "Community Engagement Manager",
      photo: member2Photo,
    },
    {
      name: "Michael Johnson",
      position: "Donor Outreach Coordinator",
      photo: member3Photo,
    },
    { name: "Emily Davis", position: "Graphic Designer", photo: member3Photo },
    {
      name: "David Brown",
      position: "Volunteer Coordinator",
      photo: member1Photo,
    },
    {
      name: "Sarah Wilson",
      position: "Support Services Specialist",
      photo: member2Photo,
    },
  ];

  return (
    <div className="relative bg-cover bg-center">
      <div className="relative z-10">
        <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold my-6 text-teal-500 text-center mb-6">
          Meet Our Team
        </h1>
        <p className="mb-6 mx-auto max-w-6xl w-2/3 text-center text-black">
          Meet the faces behind our achievements. Our diverse team is united by
          a common goal to deliver excellence. Explore the team that's shaping
          the future. Each member is passionate about creating positive change.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 bg-teal-50 py-8 text-black">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden relative">
                <Image
                  src={member.photo}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold mt-2 text-black">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamInformation;
