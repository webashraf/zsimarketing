"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { VscClose, VscMenu } from "react-icons/vsc";

const OffCanvasMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden block">
      {/* Button to toggle menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 text-slate-900 p-3 rounded-md shadow-lg focus:outline-none bg-slate-50"
      >
        <VscMenu size={20} />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Off-Canvas Menu */}
      <div
        className={` fixed top-0 right-0 h-full w-72 bg-black text-white z-50 shadow-lg transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative ">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white p-1 rounded-md focus:outline-none"
          >
            <VscClose size={24} />
          </button>

          <div className="pt-16 pl-6 flex flex-col gap-4">
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
                  className={`hover:underline text-lg pt ${
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
        </div>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
