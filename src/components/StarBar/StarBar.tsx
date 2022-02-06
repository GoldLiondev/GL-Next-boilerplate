import React from "react";
// styled component
import { StarBarWrapper, StarItemWrapper, StarItem } from "./StarBar.style";
// types
import { StarItemProps } from "types/components/Star";
// ----------------------------------------------------------

const StarBar: React.FC<StarItemProps> = ({ rate = 0 }) => {
  const getOwnRate = (index: number): number => {
    let eachRate = rate > index ? 1 : rate + 1 - index;
    eachRate = eachRate < 0 ? 0 : eachRate;
    return eachRate;
  };

  return (
    <StarBarWrapper>
      <StarItemWrapper>
        <StarItem rate={getOwnRate(1)}></StarItem>
      </StarItemWrapper>
      <StarItemWrapper>
        <StarItem rate={getOwnRate(2)}></StarItem>
      </StarItemWrapper>
      <StarItemWrapper>
        <StarItem rate={getOwnRate(3)}></StarItem>
      </StarItemWrapper>
      <StarItemWrapper>
        <StarItem rate={getOwnRate(4)}></StarItem>
      </StarItemWrapper>
      <StarItemWrapper>
        <StarItem rate={getOwnRate(5)}></StarItem>
      </StarItemWrapper>
    </StarBarWrapper>
  );
};
export default StarBar;
