import DonorFullDetails from "@/components/UI/HomePage/SearchDonar/DonorFullDetails";
import { DonorId } from "@/types";

const DonorDetailsPage = async ({ params }: DonorId) => {
  console.log({ params });
  try {
    const res = await fetch(
      `https://blood-donation-app-server-two.vercel.app/api/user/${params.donorId}`,
      {
        cache: "no-store",
      }
    );
    const response = await res.json();
    console.log({ response });
    const donor = response.data;
    console.log(donor);

    return (
      <div className="m-4">
        <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold mt-4 text-red-600 text-center">
          Details Information About Donor!
        </h1>
        <DonorFullDetails key={donor.id} donor={donor}></DonorFullDetails>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading donor details</div>;
  }
};

export default DonorDetailsPage;
