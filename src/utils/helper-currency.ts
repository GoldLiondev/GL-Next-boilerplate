// types
import { CurrencyObject } from "types/utils/currency";
// to get currentObject
export const toCurrency = (cur_string: string): CurrencyObject => {
  const sysmbolRegex = /([0-9.,])/g;
  const currencySysmbol = cur_string.replace(sysmbolRegex, "");
  const amtRegex = /((?:\d|,)*)*\.*?(\d+)/;
  const amtObj = amtRegex.exec(cur_string) || [];
  return {
    symbol: currencySysmbol ?? "$",
    integer_value: parseInt(amtObj[1] ?? "0"),
    deceimal_value: parseInt(amtObj[2] ?? "0"),
  };
};
