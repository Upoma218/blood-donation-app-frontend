import member1Photo from "@/assets/perosn1.jpg";
import member2Photo from "@/assets/perosn2.jpg";
import member3Photo from "@/assets/perosn3.jpg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const SuccessStories = () => {
  const stories = [
    {
      name: "John Doe",
      designation: "Software Engineer",
      address: "New York, NY",
      story:
        "Donating blood saved my friend's life. It's an incredible feeling to know that I can make such a difference.",
      avatar: member1Photo,
    },
    {
      name: "Jane Smith",
      designation: "Nurse",
      address: "Los Angeles, CA",
      story:
        "As a nurse, I see the need for blood donations every day. Giving blood is a small act that can save lives.",
      avatar: member2Photo,
    },
    {
      name: "Robert Brown",
      designation: "Teacher",
      address: "Chicago, IL",
      story:
        "I started donating blood in college and have continued ever since. It's my way of giving back to the community.",
      avatar: member3Photo,
    },
    {
      name: "Emily Johnson",
      designation: "Student",
      address: "Houston, TX",
      story:
        "Donating blood is a simple and rewarding experience. Knowing that I'm helping others is the best part.",
      avatar: member1Photo,
    },
    {
      name: "Michael Davis",
      designation: "Firefighter",
      address: "Phoenix, AZ",
      story:
        "In my line of work, I see the urgent need for blood donations. I donate regularly to support those in need.",
      avatar: member2Photo,
    },
    {
      name: "Sarah Wilson",
      designation: "Doctor",
      address: "San Francisco, CA",
      story:
        "Donating blood is a vital and necessary act. It's quick, easy, and saves lives.",
      avatar: member3Photo,
    },
  ];

  return (
    <div className="relative py-6 px-8 bg-cover bg-center ">
      <div className="absolute inset-0 bg-white bg-opacity-90"></div>
      <div className="relative z-10">
        <div className="my-12 text-center divider divider-error">
          <h1 className="text-2xl font-bold border-2 border-red-700 text-red-700 p-3 inline-block bg-white bg-opacity-75">
            Some of Our Success Stories
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-red-700 text-white shadow-xl"
            >
              <div className=" grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="flex flex-col items-center">
                  <div className="avatar mb-2">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={story.avatar}
                        alt={story.name}
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-bold">{story.name}</h2>
                    <p className="text-sm">{story.designation}</p>
                    <p className="text-sm">{story.address}</p>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="mb-4">{story.story}</p>
                  <div className="flex justify-center md:justify-start">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
