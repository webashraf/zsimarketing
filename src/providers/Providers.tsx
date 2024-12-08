"use client";

import { store } from "@/redux/store";
import { IChildren } from "@/types";
import { Provider } from "react-redux";

const Providers = ({ children }: IChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
 