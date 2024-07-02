"use client";

import DonarInfoCard from "@/components/UI/HomePage/SearchDonar/DonarInfoCard";
import { useGetAllDonorsQuery } from "@/redux/api/donorsApi";
import { Donor } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DonorsListPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterQuery, setFilterQuery] = useState<Record<string, any>>({});
  const [filtarData, setFiltarData] = useState<string>("");
  console.log(searchTerm);

  const query: Record<string, any> = {};

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);

  query["page"] = page;
  query["limit"] = limit;

  let pageCount: number = 0;

  const handleChange = (value: number) => {
    setPage(value);
  };

  const { data, isLoading } = useGetAllDonorsQuery({
    ...filterQuery,
    ...query,
  });
  console.log(data);
  const donors = (data as any)?.donors;
  const meta = (data as any)?.meta;
  console.log(donors);

  if (meta?.total) {
    pageCount = Math.ceil(meta.total / limit);
  }
  const onSearchHandler = () => {
    setFilterQuery({ [filtarData]: searchTerm });
  };

  const searchParams = useSearchParams();
  useEffect(() => {
    const filterType = searchParams.get("filterType");
    const filterValue = searchParams.get("filterValue");
    if (filterType) {
      setFiltarData(filterType);
    }
    if (filterValue) {
      setSearchTerm(filterValue);
    }
    setFilterQuery({ [filterType as string]: filterValue });
  }, [searchParams]);

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className=" mt-6">
          <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold my-6 text-red-600 text-center">
            Search Donor Here!
          </h1>
          <div className="join flex flex-col md:flex-row md:items-center mb-6">
            <div className="mb-2 md:mb-0">
              <input
                className="input input-bordered join-item"
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="mb-2 md:mb-0">
              <label htmlFor="genre" className="sr-only">
                Select Genre
              </label>
              <select
                id="genre"
                className="select select-bordered join-item"
                onChange={(e) => setFiltarData(e.target.value)}
              >
                <option disabled selected>
                  Filter
                </option>

                <option value="bloodType">Blood Type</option>
                <option value="location">Location</option>
                <option value="availabilty">Availability</option>
                <option value="searchTerm">SearchTerm</option>
              </select>
            </div>
            <div>
              <button
                className="btn bg-red-700 text-white font-bold join-item"
                onClick={onSearchHandler}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="my-12 text-center divider divider-error">
          <h1 className="text-2xl font-bold border-2 border-red-700 text-red-700 p-3 inline-block bg-white bg-opacity-75">
            Our Available Donors
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6 mx-12">
          {donors?.map((donor: Donor) => (
            <DonarInfoCard key={donor.id} donor={donor}></DonarInfoCard>
          ))}
        </div>
        <div className="my-5">
          <div className="join">
            {Array.from(Array(pageCount).keys()).map((el) => (
              <button
                key={el}
                onClick={() => handleChange(el + 1)}
                className="join-item btn"
              >
                {el + 1}
              </button>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DonorsListPage;
