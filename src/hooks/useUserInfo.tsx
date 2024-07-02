import { authKey } from "@/constant/authKey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage } from "@/utils/local-storage";
import { JwtPayload } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useUserInfo = (): any | string => {
  const [userInfo, setUserInfo] = useState<any | string>("");
  const router = useRouter();
  console.log({ userInfo });
  useEffect(() => {
    const fetchUserInfo = () => {
      const authToken = getFromLocalStorage(authKey);
      if (authToken) {
        const decodedData: JwtPayload & { role: any } = decodedToken(
          authToken
        ) as JwtPayload & {
          role: any;
        };
        const userInfo: any = {
          ...decodedData,
          role: decodedData.role?.toLowerCase() || "",
        };
        setUserInfo(userInfo);
      } else {
        setUserInfo("");
      }
    };

    fetchUserInfo();
  }, [router]);

  return { userInfo, setUserInfo };
};

export default useUserInfo;
