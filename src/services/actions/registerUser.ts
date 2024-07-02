"use server";

import { FieldValues } from "react-hook-form";

export const registerUser = async (data: FieldValues) => {
  const res = await fetch(
    "https://blood-donation-app-server-two.vercel.app/api/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  console.log(data);

  const userInfo = await res.json();
  console.log(userInfo);
  return userInfo;
};
