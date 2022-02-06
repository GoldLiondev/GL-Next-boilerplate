import React from "react";
// component
import { ScrollTop } from "components/Button";
// layout
import { Header, Footer } from "layouts/app-layout/index";
// styled component
import { AppLayoutWrapper } from "./app-layout.style";
// sidebar provider
import { TopBar } from "components/Sidebar";
// types
import { SideBarItemType } from "types/components/SideBar";
// -----------------------------------------------------------

const Layout = ({ children }) => {
  const topbar: Array<SideBarItemType> = [];
  return (
    <TopBar.Provider items={topbar}>
      <AppLayoutWrapper>
        <Header />
        {children}
        <Footer />
        <ScrollTop />
      </AppLayoutWrapper>
    </TopBar.Provider>
  );
};

export default Layout;
