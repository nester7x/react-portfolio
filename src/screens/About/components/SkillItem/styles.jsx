import styled from "styled-components";
import { device } from "utils/MediaQueries";

export const SkillsListItem = styled.li`
  width: 30%;
  margin: 0 0 15px;
  @media screen and ${device.laptop} {
    width: 46%;
  }
  @media screen and ${device.mobileL} {
    width: 100%;
  }
`;

export const TechnologyName = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #60f5ff;
  margin: 0 0 10px;
  letter-spacing: 0.9px;
  @media screen and ${device.tablet} {
    font-size: 16px;
    line-height: 21px;
    margin: 0 0 8px;
  }
  @media screen and ${device.mobileL} {
    font-size: 14px;
    line-height: 19px;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
`;

export const LineWrapper = styled.div`
  height: 23px;
  background-color: #ffffff;
  position: relative;
  width: 100%;
  @media screen and ${device.tablet} {
    height: 20px;
  }
  @media screen and ${device.mobileL} {
    height: 18px;
  }
`;

export const Line = styled.div`
  height: 100%;
  background-color: #60f5ff;
`;

export const Num = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  margin-left: 14px;
  @media screen and ${device.tablet} {
    font-size: 16px;
    line-height: 21px;
  }
  @media screen and ${device.mobileL} {
    font-size: 14px;
    line-height: 19px;
  }
`;
