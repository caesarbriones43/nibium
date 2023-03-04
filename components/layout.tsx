import React from "react";
import { MainHeader } from "./MainHeader/MainHeader";
import { MainFooter } from "./MainFooter/MainFooter";
import { ScrollButton } from "./ScrollButton/ScrollButton";
import { Fab } from './Fab/Fab';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <Fab></Fab>
      <ScrollButton></ScrollButton>
      <MainFooter data={[]} />
    </>
  );
}

export default Layout;
