import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const Item = ({ date, name, gitHubLink, siteLink, image }) => {
  return (
    <S.Item
      href={siteLink}
      target="_blank"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <S.Date>{date}</S.Date>
      <S.Name>{name}</S.Name>
      <S.Link href={gitHubLink} target="_blank">
        code
      </S.Link>
    </S.Item>
  );
};

Item.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gitHubLink: PropTypes.string.isRequired,
  siteLink: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
};

export default Item;

/*
* <S.Item
        href="https://tourmaline-pony-44363b.netlify.app/"
        target="_blank"
      >
        <S.Date>2022</S.Date>
        <S.Name></S.Name>
        <S.Link
          href=""
          target="_blank"
        >
          code
        </S.Link>
      </S.Item>
      <S.Item href="http://test.nesterenych.in.net/" target="_blank">
        <S.Date>2022</S.Date>
        <S.Name></S.Name>
        <S.Link
          href="https://github.com/nester7x/portfolio/blob/develop/scss/portfolio.scss"
          target="_blank"
        >
          code
        </S.Link>
      </S.Item>
      <S.Item href="http://test.nesterenych.in.net/" target="_blank">
        <S.Date>2021</S.Date>
        <S.Name></S.Name>
        <S.Link
          href="https://github.com/nester7x/portfolio/blob/develop/scss/portfolio.scss"
          target="_blank"
        >
          code
        </S.Link>
      </S.Item>
* */
