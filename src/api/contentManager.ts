import * as contentful from "contentful-management";

// ----------------------------------------------------------

const apiInstance: contentful.ClientAPI = contentful.createClient({
  accessToken: process.env?.NEXT_PUBLIC_MANAGER_ACCESS_TOKEN ?? "",
});

const contentfulManager = apiInstance
  .getSpace(process.env?.NEXT_PUBLIC_SPACE ?? "")
  .then((space) =>
    space.getEnvironment(process.env?.NEXT_PUBLIC_ENVIRONMENT ?? "master")
  );

export default contentfulManager;
