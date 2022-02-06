export interface VideoPlayerWrapperProps {
  processing?: boolean;
  current?: number;
}
export interface VideoProps extends VideoWrapperProps {
  media: string;
}
export interface VideoWrapperProps {
  mode?: "fill" | "block";
}
