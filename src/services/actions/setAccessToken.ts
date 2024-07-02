"use server";

import { authKey } from "@/constant/authKey";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const setAccessToken = (accessToken: string, option?: any) => {
  cookies().set(authKey, accessToken);
  if (option && option.redirect) {
    redirect(option.redirect);
  }
};

export default setAccessToken;
