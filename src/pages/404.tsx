import React from "react";
import type { NextPage } from "next";
// component
import { Page } from "components/Page";
// views
import { NotFoundView } from "views/404";
//
// ------------------------------------------------------------

const Page404: NextPage = () => {
  return (
    <Page name="404">
      <NotFoundView />
    </Page>
  );
};
export default Page404;
