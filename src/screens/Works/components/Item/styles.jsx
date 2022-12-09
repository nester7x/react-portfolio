import styled from "styled-components";

import { device } from "utils/MediaQueries";

export const Date = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  margin: 0 0 5px;
  z-index: 20;
  display: none;
  @media screen and ${device.tablet} {
    font-size: 16px;
    line-height: 21px;
  }
`;

export const Name = styled.p`
  z-index: 20;
  display: none;
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  margin: 0 0 5px;
  @media screen and ${device.tablet} {
    font-size: 20px;
    line-height: 26px;
  }
`;

export const Link = styled.a`
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  z-index: 20;
  display: none;
  :hover {
    text-decoration: underline;
  }
  @media screen and ${device.tablet} {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const Item = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  padding: 18px;
  width: 48%;
  min-height: 395px;
  border-radius: 4px;
  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background: rgba(0, 0, 0, 0.35);
    transition: 0.4s;
  }
  :hover:before {
    opacity: 1;
  }
  :hover {
    ${Date},
    ${Name},
    ${Link} {
      display: block;
      width: fit-content;
      color: #ffffff;
    }
  }
  :nth-child(even) {
    margin: 45px 0 0;
  }
  :nth-child(odd) {
    margin: 0 0 45px;
  }
  @media screen and ${device.laptop} {
    min-height: 295px;
  }
  @media screen and ${device.tablet} {
    min-height: 275px;
    width: 75%;
    ${Date},
    ${Name},
      ${Link} {
      display: block;
      width: fit-content;
      color: #ffffff;
    }
    :before {
      opacity: 1;
    }
    :nth-child(even) {
      margin: 0 0 20px;
    }
    :nth-child(odd) {
      margin: 0 0 20px;
    }
  }
  @media screen and ${device.tabletS} {
    min-height: 265px;
    width: 100%;
  }
  @media screen and ${device.mobileL} {
    min-height: 240px;
  }
  @media screen and ${device.mobileM} {
    min-height: 205px;
  }
`;
