/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen  ">
      <div className="text-center">
        <h1 className="text-6xl font-bold font-taviraj">404</h1>
        <p className="mt-4 text-lg font-epilogue">
          Oops! The page you're looking for cannot be found.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block  text-[#da9100] px-6 py-2 rounded font-semibold hover:bg-[#da9100d8] hover:text-black transition bg-black"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
