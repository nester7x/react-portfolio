import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";

import desktopBg from "assets/Images/desktop_bg.jpg";
import { device } from "utils/MediaQueries";

export const Wrapper = styled.div`
  background-color: #060606;
  color: #ffffff;
  position: relative;
  z-index: 100;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  padding: 15px 0 15px;
  position: relative;
  flex: 1 1 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  :before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
    height: 100%;
    opacity: 0.4;
    background-image: url(${desktopBg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }
  &.open {
    opacity: 0.15;
    z-index: -1;
  }
`;

export const MainContainer = styled(Container)`
  && {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  background-color: #060606;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
  padding: 22px 0;
  @media screen and ${device.tablet} {
    padding: 15px 0;
  }
`;

export const HeaderInner = styled(Container)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled(NavLink)`
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  &.open {
    opacity: 0.15;
    z-index: -1;
  }
  @media screen and ${device.tablet} {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const MenuBurger = styled(MenuIcon)`
  && {
    display: none;
    z-index: 200;
    @media screen and ${device.tablet} {
      display: block;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  @media screen and ${device.tablet} {
    position: absolute;
    background-color: transparent;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    transform: translateX(100%) scale(0);
    transition: 0.4s;
    opacity: 0;
    z-index: 105;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
    &.open {
      transition: 0.4s;
      transform: translateX(0) scale(1);
      opacity: 1;
    }
  }
`;

export const MenuItem = styled.li`
  @media screen and ${device.tablet} {
    margin: 0 0 30px;
  }
`;

export const Link = styled(NavLink)`
  margin: 0 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  :hover {
    color: #60f5ff;
  }
  svg {
    fill: #ffffff;
  }
  svg:hover {
    opacity: 0.7;
  }
  // @media screen and ${device.tablet} {
  //   font-size: 15px;
  //   line-height: 20px;
  // }
`;

export const ActiveLink = styled(NavLink)`
  margin: 0 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  position: relative;
  padding: 0 0 5px;
  :after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 0;
    width: 16px;
    height: 2px;
    background-color: #ffffff;
    border-radius: 60px;
  }
  :hover {
    color: #60f5ff;
  }
  :hover:after {
    background-color: #60f5ff;
  }
  svg {
    fill: #ffffff;
  }
  svg:hover {
    opacity: 0.7;
  }
  // @media screen and ${device.tablet} {
  //   font-size: 15px;
  //   line-height: 20px;
  // }
`;
