import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const SkillItem = ({ technology, skillPoint }) => {
  return (
    <S.SkillsListItem>
      <S.TechnologyName>{technology}</S.TechnologyName>
      <S.ItemContent>
        <S.LineWrapper>
          <S.Line style={{ width: `${skillPoint}%` }} />
        </S.LineWrapper>
        <S.Num>{skillPoint}%</S.Num>
      </S.ItemContent>
    </S.SkillsListItem>
  );
};

SkillItem.propTypes = {
  technology: PropTypes.string.isRequired,
  skillPoint: PropTypes.number.isRequired,
};

export default SkillItem;
