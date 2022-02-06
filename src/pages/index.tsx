// next
import React from "react";
import type { NextPage } from "next";
// component
import { Page } from "components/Page";
import { WithContainer } from "components/Container";
// views
import { HeroView } from "views/Home";

// ------------------------------------------------------
const Home: NextPage = () => {
  return (
    <Page name="home">
      <WithContainer mWidth={1440} SectionView={HeroView} cColor="black.200" />
    </Page>
  );
};

export default Home;
