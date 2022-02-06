import { InitialProps } from "./Common";
// -----------------------------------------------
export interface ImageProps extends InitialProps {
  src?: StaticImageData | string;
  alt?: string;
  width?: number;
  height?: number;
  mode?: "intrinsic" | "fill";
  oFit?: "cover" | "contain" | "none" | "fill";
  quality?: string | number;
  loadOption?: "lazy" | "eager" | undefined;
  oPosition?: "top" | "bottom" | "right" | "left" | "initial";
  priority?: boolean;
}
export interface ImagePlaceholderProps {
  placeholder?: "empty" | "blur";
  blurDataURL?: string;
}
