import React from "react";
// component
import { Seo } from "components/Seo";
// utils
import { getInformation } from "utils/seo-information";
// types
import { PageProps } from "types/components/Page";

// --------------------------------------------------

const Page: React.FC<PageProps> = ({ name, children }) => {
  const props = getInformation(name);
  return (
    <div>
      <Seo {...props} />
      {children}
    </div>
  );
};
export default Page;
