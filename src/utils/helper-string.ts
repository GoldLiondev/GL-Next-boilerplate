// type
import { SortedTypeByAlpha } from "types/utils/helper-type";

export const truncate = (str: string, max = 10, showDots = true) => {
  if (str) {
    if (str.length > max) {
      return showDots ? str.substr(0, max) + " ..." : str.substr(0, max);
    } else {
      return str;
    }
  }
  return " ";
};

export const getGroupByAlpha = (
  rawData,
  key = "title"
): Array<SortedTypeByAlpha<any>> => {
  const data = rawData.reduce((r, e) => {
    const group = e[key][0];
    if (!r[group]) r[group] = { group, children: [e] };
    else r[group].children.push(e);
    return r;
  }, {});
  return Object.values(data);
};

export const getID = (fullId, type) => {
  return parseInt(fullId.replace(`gid://shopify/${type}/`, ""));
};
