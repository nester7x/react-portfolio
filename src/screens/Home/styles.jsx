import styled from "styled-components";

import { device } from "utils/MediaQueries";

export const Wrapper = styled.div`
  flex: 1 1 100%;
  display: flex;
  align-items: center;
`;

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 80px;
  line-height: 88px;
  @media screen and ${device.laptopL} {
    font-size: 76px;
    line-height: 82px;
  }
  @media screen and ${device.laptop} {
    font-size: 64px;
    line-height: 73px;
  }
  @media screen and ${device.tablet} {
    font-size: 49px;
    line-height: 57px;
  }
  @media screen and ${device.tabletS} {
    font-size: 34px;
    line-height: 42px;
  }
  @media screen and ${device.mobileL} {
    font-size: 30px;
    line-height: 38px;
  }
  @media screen and ${device.mobileM} {
    font-size: 25px;
    line-height: 33px;
  }
`;

export const Colored = styled.span`
  color: #60f5ff;
`;
