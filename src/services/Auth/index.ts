"use server";

import { cookies } from "next/headers";

export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  const res = await fetch("https://api.zsimarketing.com/api/auth/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await res.json();

  if (data.status_code === 200 && data.isError == false) {
    cookies().set("token", data.data.token);
    return data.data;
  }
  return null;
};
