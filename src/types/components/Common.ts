export interface InitialProps {
  padding?: string;
  margin?: string;
  fSize?: number;
  fWeight?: number;
  fColor?: string;
  fStyle?: "italic" | "normal";
  tAlign?: "center" | "left" | "right";
  tFont?: "base" | "changa" | "roboto" | "exodemibold" | "inter";
  display?: string;
  tTransForm?: "uppercase" | "lowercase" | "capitalize" | "none";
  mWidth?: number;
  zIndex?: number;
  className?: string;
  cursor?: string;
  [key: string]: unknown;
}
