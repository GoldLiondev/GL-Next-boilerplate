// styled system
import styled from "styled-components";
// types
import {
  VideoPlayerWrapperProps,
  VideoWrapperProps,
} from "types/components/Video";

// -----------------------------------------------------

export const VideoWrapper = styled.div`
  :after {
    content: " ";
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;
export const ToolWrapper = styled.div<VideoPlayerWrapperProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 30;
  &:hover {
    .pauseWrapper {
      opacity: ${({ processing }) => (!processing ? 0 : 100)};
      pointer-events: ${({ processing }) => (!processing ? "none" : "all")};
      transition-delay: ${({ processing }) => (!processing ? "0s" : "1s")};
    }
    .playerWrapper {
      opacity: ${({ processing, current }) =>
        current !== 0 && processing ? 0 : 100};
      pointer-events: ${({ processing, current }) =>
        current !== 0 && processing ? "none" : "all"};
      transition-delay: ${({ processing }) => (processing ? "0s" : "1s")};
    }
  }
  .playerWrapper {
    opacity: ${({ current }) => (current === 0 ? 100 : 0)};
    pointer-events: ${({ current }) => (current === 0 ? "all" : "none")};
  }
`;

export const ProductVideoWrapper = styled.div<VideoWrapperProps>`
  position: ${({ mode }) => (mode === "fill" ? "absolute" : "relative")};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  video {
    object-fit: cover;
    height: 100%;
  }
`;

export const ProgressWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 2;
`;
export const PlayerWrapper = styled.div<VideoPlayerWrapperProps>`
  z-index: 2;
  position: absolute;
  top: calc(50% - 30px);
  right: calc(50% - 20px);
  font-size: 50px;
  path {
    stroke: white;
  }
  width: 50px;
  height: 50px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease-in;
  @media screen and (max-width: 425px) {
    top: calc(50% - 20px);
    right: calc(50% - 40px);
    font-size: 29px;
  }
`;
export const PauseWrapper = styled.div<VideoPlayerWrapperProps>`
  z-index: 2;
  position: absolute;
  top: calc(50% - 30px);
  right: calc(50% - 20px);
  font-size: 50px;
  path {
    stroke: white;
  }
  transition: all 0.4s ease-in;
  width: 50px;
  height: 50px;
  opacity: 0;
  pointer-events: none;
  transition-delay: 0s;
  @media screen and (max-width: 425px) {
    top: calc(50% - 20px);
    right: calc(50% - 40px);
    font-size: 29px;
  }
`;
export const PlayerInner = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 8px;
  border-radius: 43px;
  right: 7px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  @media screen and (max-width: 425px) {
    width: 29px;
    height: 29px;
    right: 23px;
    top: 4px;
  }
`;
