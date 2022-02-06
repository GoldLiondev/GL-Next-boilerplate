import { createClient } from "contentful";

// ----------------------------------------------------------------------

const contentfulClient = createClient({
  space: process.env?.NEXT_PUBLIC_SPACE ?? "",
  environment: process.env?.NEXT_PUBLIC_ENVIRONMENT ?? "master",
  accessToken: process.env?.NEXT_PUBLIC_ACCESS_TOKEN ?? "",
});

export default contentfulClient;
