import Navbar from "@/components/Shared/Navbar";
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
