import { IChildren } from "@/types";

const AnimatedCard = ({ children }: IChildren) => {
  return (
    <>
      <div className="group cursor-pointer group-hover:duration-500 overflow-hidden relative  rounded-2xl shadow-inner shadow-gray-50 flex flex-col justify-around items-center w-[100%] py-8 bg-neutral-900 text-gray-50">
        <div className="after:duration-500 before:duration-500 duration-500  group-hover:before:translate-x-12 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-12 after:h-12 after:bg-orange-400 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 flex flex-col font-extrabold  z-10">
          {children}
        </div>
        
      </div>
    </>
  );
};

export default AnimatedCard;
