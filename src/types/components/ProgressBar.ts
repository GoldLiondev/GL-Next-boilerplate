export interface ProgressBarProps
  extends ProgressBarWrapperProps,
    ProgressBarItemProps {
  total?: number;
  current?: number;
}

export interface ProgressBarWrapperProps {
  bColor?: string;
}
export interface ProgressBarItemProps {
  iColor?: string;
  progress?: number;
}
