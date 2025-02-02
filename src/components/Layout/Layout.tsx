import { PropsWithChildren } from "react";

import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
