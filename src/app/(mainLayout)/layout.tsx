import Navbar from "@/components/navbar/Navbar";
import { ReactNode } from "react";

const mainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default mainLayout;
