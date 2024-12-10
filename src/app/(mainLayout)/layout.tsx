import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import OffCanvasMenu from "@/components/Shared/OffCanvasMenu";
import { IChildren } from "@/types";

const mainLayout = ({ children }: IChildren) => {
  return (
    <>
      <Navbar />
      <OffCanvasMenu />
      {children}
      <Footer />
    </>
  );
};

export default mainLayout;
