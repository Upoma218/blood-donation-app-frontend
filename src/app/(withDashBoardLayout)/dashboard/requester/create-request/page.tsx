import { Suspense } from "react";
import CreateRequest from "./createPage";

const page = () => {
  return (
    <Suspense fallback={<></>}>
      <CreateRequest></CreateRequest>
    </Suspense>
  );
};

export default page;
