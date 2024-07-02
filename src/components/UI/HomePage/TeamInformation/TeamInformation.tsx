import Image from "next/image";

import bgImage from "@/assets/BloodDrop.png";
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
    <div
      className="relative py-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-90"></div>
      <div className="relative z-10">
        <div className="my-12 text-center divider divider-error">
          <h1 className="text-2xl font-bold border-2 border-red-700 text-red-700 p-3 inline-block bg-white bg-opacity-75">
            Meet Our Team
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
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
              <h3 className="text-lg font-semibold mt-2">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamInformation;
