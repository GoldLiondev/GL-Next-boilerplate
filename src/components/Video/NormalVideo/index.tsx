import React, { useRef } from "react";
// component
import { ProgressBar } from "components/ProgressBar";
// types
import { VideoProps } from "types/components/Video";
// hook
import { useVideoPlayer } from "hooks";
// icons
import { GrPauseFill, GrPlayFill } from "react-icons/gr";
// styled component
import {
  VideoWrapper,
  ToolWrapper,
  ProductVideoWrapper,
  ProgressWrapper,
  PlayerWrapper,
  PlayerInner,
  PauseWrapper,
} from "./NormalVideo.style";
import { isEmpty } from "utils/helper-validation";
// -----------------------------------------------------------------------------

const Video: React.FC<VideoProps> = ({ media, mode = "fill" }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { playerState, togglePlay, handleOnTimeUpdate } = useVideoPlayer(
    videoRef,
    !isEmpty(media)
  );

  return (
    <VideoWrapper>
      <ProductVideoWrapper mode={mode}>
        <video
          src={media}
          autoPlay={true}
          width="100%"
          ref={videoRef}
          controls={false}
          onTimeUpdate={handleOnTimeUpdate}
        ></video>
      </ProductVideoWrapper>
      <ProgressWrapper>
        <ProgressBar current={playerState.progress} />
      </ProgressWrapper>
      <ToolWrapper
        processing={playerState.isPlaying}
        current={playerState.progress}
      >
        <PlayerWrapper
          processing={playerState.isPlaying}
          className="playerWrapper"
        >
          <GrPlayFill />
          <PlayerInner onClick={togglePlay} />
        </PlayerWrapper>
        <PauseWrapper
          processing={playerState.isPlaying}
          className="pauseWrapper"
        >
          <GrPauseFill />
          <PlayerInner onClick={togglePlay} />
        </PauseWrapper>
      </ToolWrapper>
    </VideoWrapper>
  );
};

export default Video;
