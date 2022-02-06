import Shopify from "shopify-api-node";

const shopifyClient = new Shopify({
  shopName: process.env?.NEXT_PUBLIC_SHOP_NAME ?? "",
  apiKey: process.env?.NEXT_PUBLIC_SHOP_APIKEY ?? "",
  password: process.env?.NEXT_PUBLIC_SHOP_PASSWORD ?? "",
});
export default shopifyClient;
