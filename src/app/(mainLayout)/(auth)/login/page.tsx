/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { setAccessToken } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { loginUser } from "@/services/Auth";
import { useState } from "react";

const LoginPage = () => {
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();
  const currentUserToken = useAppSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");

    console.log("Email:", email);
    console.log("Password:", password);

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const res = await loginUser({ email, password });

      console.log("Logged in successfully:", res);
      if (res) {
        dispatch(setAccessToken(res.token));
        console.log("currentUserToken", currentUserToken);
      }
    } catch (error: any) {
      setError(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-[90vh] flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue="testuser@gmail.com"
              required
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#da9100]"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              defaultValue="testuser@gmail.com"
              required
              placeholder="Enter your password"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#da9100]"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-[#da9100] text-white font-semibold rounded-md hover:bg-[#ba8c2f] focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
