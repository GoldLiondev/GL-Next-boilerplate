import BaseColors from "./colors";
import BaseFonts from "./fonts";
const defaultTheme = {
  colors: {
    ...BaseColors,
  },
  fonts: {
    ...BaseFonts,
  },
  transition: {
    normal: "all .1s ease",
  },
  fontSizes: {
    ms: 10,
    xs: 12,
    sm: 14,
    base: 16,
    mm: 18,
    md: 19,
    lg: 21,
    xl: 24,
    xl2: 27,
    "2xl": 30,
    "3xl": 36,
    "4xl": 42,
    "5xl": 48,
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    bolder: 800,
  },
};
export default defaultTheme;
