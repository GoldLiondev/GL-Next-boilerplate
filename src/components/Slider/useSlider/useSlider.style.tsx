// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// -------------------------------------------------------
export const BannerWrapper = styled.div`
  .bulletContainer {
    width: 30px;
    height: 2px;

    border-radius: 0px;
    background: ${themeGet("colors.whites.100")};
  }
  .swiper-slide {
    width: auto;
  }
`;
