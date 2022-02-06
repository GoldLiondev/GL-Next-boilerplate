// types
import { ComponentType } from "react";

// --------------------------------------------------

export interface WithContainerProps extends ColorContainerProps {
  SectionView: ComponentType<any>;
  mode?: "colorContainer" | "container" | "wrapper" | "colorWrapper" | "none";
  mWidth?: number;
  className?: string;
  [key: string]: any;
}

export interface ColorContainerProps {
  cColor?: string;
}
