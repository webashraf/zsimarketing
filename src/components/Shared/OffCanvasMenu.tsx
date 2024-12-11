"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { VscClose, VscMenu } from "react-icons/vsc";

const OffCanvasMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden block">
      <div className="flex items-center justify-between p-5 fixed w-full top-0 z-50 bg-white">
        <Link href="/" className="font-mono uppercase text-2xl">
          zsimarketing
        </Link>
        {/* Button to toggle menu */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="  text-slate-900 p-3 rounded-md shadow-lg focus:outline-none bg-slate-50"
        >
          <VscMenu size={20} />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Off-Canvas Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white text-black z-50 shadow-lg transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 bg-[#c29958] text-white shadow focus:outline-none"
        >
          <VscClose size={28} />
        </button>

        {/* Menu Links */}
        <div className="pt-16 pl-6 flex flex-col gap-4 border-b pb-3">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/fleet", label: "Fleet" },
            { href: "/get-a-quote", label: "Get A Quote" },
            { href: "/contact", label: "Contact" },
            { href: "/rate", label: "Rate" },
            { href: "/driver-login", label: "Driver Login" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <p
                className={`hover:underline text-lg ${
                  pathname === item.href
                    ? "underline font-bold text-[#ca8600]"
                    : ""
                }`}
              >
                {item.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Contact Section */}
        <div className="pl-6 mt-6 space-y-2">
          <span className="flex items-center gap-2">
            <FaPhoneAlt />
            <a
              href="tel:1-833-711-4606"
              className="hover:text-gray-600 transition-all duration-300"
            >
              1-833-711-4606
            </a>
          </span>
          <button className="border-2 border-black px-3 py-2 rounded-md font-semibold hover:bg-black hover:text-white transition-all duration-300 block">
            Book Now Pay Later
          </button>
          <Link
            href="/login"
            className="border-2 border-black px-3 py-2 rounded-md font-semibold hover:bg-black hover:text-white transition-all duration-300 inline-block"
          >
            Account Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
