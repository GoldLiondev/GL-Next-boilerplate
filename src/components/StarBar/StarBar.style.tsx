// styled component
import styled from "styled-components";
// assets
import FullStar from "assets/images/product/FullStar.png";
import EmptyStar from "assets/images/product/EmptyStar.png";
// types
import { StarItemProps } from "types/components/Star";

// ---------------------------------------------

export const StarBarWrapper = styled.div`
  display: flex;
`;
export const StarItemWrapper = styled.div`
  background: url(${EmptyStar.src}) no-repeat left;
  width: 14px;
  height: 14px;
  background-size: cover;
`;
export const StarItem = styled.div<StarItemProps>`
  width: ${({ rate }) => rate * 100}%;
  height: 14px;
  background: url(${FullStar.src}) no-repeat left;
  background-size: cover;
`;
