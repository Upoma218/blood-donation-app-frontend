import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen mx-auto">{children}</div>
      <Footer></Footer>
    </>
  );
};

export default CommonLayout;
