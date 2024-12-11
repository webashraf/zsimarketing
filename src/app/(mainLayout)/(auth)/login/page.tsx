/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { setAccessToken } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { loginUser } from "@/services/Auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const LoginPage = () => {
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false); 
  const router = useRouter();
  const dispatch = useAppDispatch();
  const currentUserToken = useAppSelector((state) => state.auth);

  console.log("currentUserToken", currentUserToken);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    setError("");
    setSuccessMessage("");

    console.log("Email:", email);
    console.log("Password:", password);

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const res = await loginUser({ email, password });

      console.log("Logged in successfully:", res);
      if (res.status_code === 200) {
        dispatch(setAccessToken(res.data.token));
        setSuccessMessage("Login successful! Redirecting...");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setError("Login failed email or password is wrong!");
      }
    } catch (error: any) {
      setError(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 bg-gray-100">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl overflow-hidden rounded-lg shadow-lg bg-white">
        <div
          className="h-48 lg:h-auto lg:w-1/2 bg-center bg-cover flex items-center justify-center"
          style={{
            backgroundImage: `url('https://i.ibb.co/CMJPL77/pexels-lazaro-rodriguez-jr-11199025-6565048.jpg')`,
          }}
        >
          <h2 className="text-xl md:text-3xl text-center py-5 text-white uppercase">
            Welcome to <br /> ZSI Marketing
          </h2>
        </div>

        <div className="p-8 w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-sm text-center mb-4">
              {successMessage}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
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

            {/* Password Input */}
            <div className="mb-6 relative">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Toggle input type
                  name="password"
                  defaultValue="testuser@gmail.com"
                  required
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#da9100]"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-[#da9100] text-white font-semibold rounded-md hover:bg-[#ba8c2f] focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
