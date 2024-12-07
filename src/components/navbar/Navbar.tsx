import { menuItems } from "@/config/site";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="uppercase w-full bg-slate-200 flex justify-between py-4 items-center px-5">
      <div className="font-mono uppercase text-2xl">zsimarketing</div>
      <ul className="">
        {menuItems.map((menu) => (
          <li className="inline-block mr-2" key={menu.title}>
            {menu.title}
          </li>
        ))}
      </ul>
      <div className="flex gap-3">
        <span className="flex items-center gap-2 hover:text-white">
          <FaPhoneAlt />
          <a href="tel:1-833-711-4606" className=" ">
            1-833-711-4606
          </a>
        </span>
        <button className="border-2 border-black px-3 py-2 rounded-md font-semibold hover:bg-black hover:text-white">
          Book Now Pay Later
        </button>
        <button className="border-2 border-black px-3 py-2 rounded-md font-semibold hover:bg-black hover:text-white">
          Account Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
