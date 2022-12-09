import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import * as S from "./styles";

function Layout({ children }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const closeDropDown = async (e) => {
      if (e.path[0] !== btnRef.current) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", closeDropDown);

    return () => document.body.removeEventListener("click", closeDropDown);
  }, []);

  const links = [
    {
      component: <S.Link to="">Home</S.Link>,
      activeComponent: <S.ActiveLink to="">Home</S.ActiveLink>,
      key: "home",
    },
    {
      component: <S.Link to="works">Works</S.Link>,
      activeComponent: <S.ActiveLink to="works">Works</S.ActiveLink>,
      key: "works",
    },
    {
      component: <S.Link to="about">About</S.Link>,
      activeComponent: <S.ActiveLink to="about">About</S.ActiveLink>,
      key: "about",
    },
  ];

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderInner>
          <S.Logo to="" className={isOpen ? "open" : "closed"}>
            Andrii Nesterenko.
          </S.Logo>
          <S.MenuBurger
            ref={btnRef}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          />
          <S.Menu className={isOpen ? "open" : "closed"}>
            {links.map((item) => (
              <S.MenuItem key={item.key} data-hover={item.key}>
                {location.pathname.split("/")[1] === item.component.props.to
                  ? item.activeComponent
                  : item.component}
              </S.MenuItem>
            ))}
          </S.Menu>
        </S.HeaderInner>
      </S.Header>

      <S.Main className={isOpen ? "open" : "closed"}>
        <S.MainContainer>{children}</S.MainContainer>
      </S.Main>
    </S.Wrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
