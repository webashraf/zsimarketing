import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { IChildren } from "@/types";

const mainLayout = ({ children }: IChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default mainLayout;
