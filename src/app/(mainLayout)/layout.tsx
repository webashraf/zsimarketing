import Navbar from "@/components/navbar/Navbar";
import { IChildren } from "@/types";

const mainLayout = ({ children }: IChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default mainLayout;
