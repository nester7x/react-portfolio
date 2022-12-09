import styled from "styled-components";
import { device } from "utils/MediaQueries";

export const Wrapper = styled.div``;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 70px;
  @media screen and ${device.laptopL} {
    margin: 0 0 50px;
  }
  @media screen and ${device.laptop} {
    margin: 0 0 30px;
  }
  @media screen and ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and ${device.mobileL} {
    margin: 0 0 20px;
  }
`;

export const SelfInfo = styled.div`
  margin: 0 0 0 150px;
  width: 60%;
  @media screen and ${device.laptopL} {
    margin: 0 0 0 100px;
  }
  @media screen and ${device.laptop} {
    margin: 0 0 0 65px;
  }
  @media screen and ${device.tablet} {
    margin: 0;
    width: 100%;
  }
`;

export const ImgWrapper = styled.span`
  display: inline-block;
  position: relative;
  margin: 0 0 60px 20px;
  width: 282px;
  height: 317px;
  border: 6px solid #60f5ff;
  @media screen and ${device.laptop} {
    width: 252px;
    height: 287px;
  }
  @media screen and ${device.tablet} {
    width: 232px;
    height: 267px;
  }
  @media screen and ${device.mobileL} {
    width: 212px;
    height: 247px;
  }
`;

export const Img = styled.img`
  position: absolute;
  right: 26px;
  top: 26px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  margin-bottom: 27px;
  font-weight: 700;
  font-size: 65px;
  line-height: 73px;
  color: #ffffff;
  span {
    color: #60f5ff;
  }
  @media screen and ${device.laptopL} {
    font-size: 60px;
    line-height: 68px;
  }
  @media screen and ${device.laptop} {
    margin-bottom: 20px;
    font-size: 50px;
    line-height: 58px;
  }
  @media screen and ${device.tablet} {
    margin-bottom: 15px;
    font-size: 40px;
    line-height: 48px;
  }
  @media screen and ${device.mobileL} {
    margin-bottom: 10px;
    font-size: 30px;
    line-height: 38px;
  }
`;

export const AboutMe = styled.p`
  font-size: 18px;
  line-height: 23px;
  margin: 0 0 35px;
  @media screen and ${device.laptop} {
    margin: 0 0 20px;
  }
  @media screen and ${device.tablet} {
    font-size: 16px;
    line-height: 21px;
    margin: 0 0 15px;
  }
  @media screen and ${device.mobileL} {
    font-size: 14px;
    line-height: 19px;
    margin: 0 0 10px;
  }
`;

export const SocList = styled.ul`
  display: flex;
  align-items: center;
`;

export const ListItem = styled.li`
  margin: 0 38px 0 0;
  @media screen and ${device.tablet} {
    margin: 0 28px 0 0;
  }
`;

export const Link = styled.a`
  transition: 0.2s;
  :hover {
    opacity: 0.5;
  }
`;

export const SkillsTitle = styled.h5`
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  margin: 0 0 40px;
  @media screen and ${device.laptop} {
    margin: 0 0 25px;
  }
  @media screen and ${device.tablet} {
    font-size: 22px;
    line-height: 28px;
    margin: 0 0 20px;
  }
  @media screen and ${device.mobileL} {
    font-size: 20px;
    line-height: 26px;
    margin: 0 0 15px;
  }
`;

export const SkillsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
