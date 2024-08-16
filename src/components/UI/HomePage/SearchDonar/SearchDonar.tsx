import { Donor } from "@/types";
import Link from "next/link";
import DonarInfoCard from "./DonarInfoCard";
import SearchButton from "./SearchButton";

const SearchDonar = async () => {
  const res = await fetch(
    "http://localhost:5000/api/donors",

    {
      cache: "no-store",
    }
  );
  const { data: donors } = await res.json();

  return (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-center text-white py-6 w-full">
        <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold my-6 text-white text-center">
          Search Donor Here!
        </h1>
        <div className="flex items-center justify-center pb-6">
          <SearchButton></SearchButton>
        </div>
      </div>
      <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold my-6 text-teal-500 text-center">
        Our Available Donors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mx-12">
        {donors?.slice(0, 6).map((donor: Donor) => (
          <DonarInfoCard key={donor.id} donor={donor}></DonarInfoCard>
        ))}
      </div>
      <div>
        <Link href="/donors">
          <button className="btn btn-accent btn-outline text-teal-500 font-bold">
            View All Donors
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchDonar;
