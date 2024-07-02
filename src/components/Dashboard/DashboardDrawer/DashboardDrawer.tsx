import { getUserInfo } from "@/services/auth.services";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const DashboardDrawer = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const userRole = getUserInfo() as any;
    const role = userRole?.role;
    console.log(role);
    setUserRole(role);
  }, []);
  return (
    <div className="drawer lg:drawer-open md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  w-full">
        <label
          htmlFor="my-drawer-2"
          className="btn bg-red-700 drawer-button lg:hidden absolute top-1 left-1 btn-xs text-white"
        >
          <FaBars size={16} />
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-64 min-h-full  bg-pink-200 text-pink-700 font-bold shadow-xl shadow-slate-950">
          {userRole && (
            <>
              <li>
                <Link href="/dashboard">My Profile</Link>
              </li>
              <li>
                <Link href="/dashboard/change-password">Change Password</Link>
              </li>
            </>
          )}
          {userRole === "admin" && (
            <li>
              <Link href="/dashboard/admin">Manage User</Link>
            </li>
          )}

          {userRole === "donor" && (
            <li>
              <Link href="/dashboard/donor">All Requests From Public</Link>
            </li>
          )}
          {userRole === "requester" && (
            <li>
              <Link href="/dashboard/requester">My Requests To Donor</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardDrawer;
