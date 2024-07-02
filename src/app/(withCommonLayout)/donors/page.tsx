import { Suspense } from "react";
import DonorsListPage from "./donorPage";

const page = () => {
  return (
    <Suspense fallback={<></>}>
      <DonorsListPage></DonorsListPage>
    </Suspense>
  );
};

export default page;
