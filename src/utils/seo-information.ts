// types
import { SeoProps } from "types/components/Seo";
// data
import { informations } from "utils/const-data/seo-list";

// ---------------------------------------------------------

export const getInformation = (page: string): SeoProps => {
  if (informations[page]) {
    return informations[page];
  } else {
    return {
      title: "",
      description: "",
      canonical: "",
      keywords: "",
      css: "",
      js: "",
      image: "",
    };
  }
};
