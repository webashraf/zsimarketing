import { menuItems } from "@/config/site";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="uppercase w-full bg-slate-200 flex justify-between py-4 items-center px-5">
      <Link href="/" className="font-mono uppercase text-2xl">
        zsimarketing
      </Link>
      <div className="">
        {menuItems.map((menu) => (
          <Link
            href={menu.location}
            className="inline-block mr-2 hover:text-slate-400 transition-all duration-300"
            key={menu.title}
          >
            {menu.title}
          </Link>
        ))}
      </div>
      <div className="flex gap-3">
        <span className="flex items-center gap-2 ">
          <FaPhoneAlt />
          <a
            href="tel:1-833-711-4606"
            className="hover:text-slate-400 transition-all duration-300"
          >
            1-833-711-4606
          </a>
        </span>
        <button className="border-2 border-black px-3 py-2 rounded-md font-semibold hover:bg-black hover:text-white transition-all duration-300">
          Book Now Pay Later
        </button>
        <button className="border-2 border-black px-3 py-2 rounded-md font-semibold hover:bg-black hover:text-white transition-all duration-300">
          Account Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
