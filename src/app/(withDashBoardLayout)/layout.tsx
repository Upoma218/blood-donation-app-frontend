"use client";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation"; // Change import statement
import { useEffect } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <Navbar />
      <DashboardDrawer>{children}</DashboardDrawer>
      <Footer />
    </>
  );
};

export default DashboardLayout;
