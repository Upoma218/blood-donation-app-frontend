import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import { Suspense } from "react";
import DonorsListPage from "./donorPage";

const page = () => {
  return (
    <Suspense fallback={<></>}>
      <HeroSection></HeroSection>
      <DonorsListPage></DonorsListPage>
    </Suspense>
  );
};

export default page;
