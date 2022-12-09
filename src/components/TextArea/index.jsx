import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

function TextArea({ onChange, value, type, errorText, ...rest }) {
  return (
    <>
      <S.TextAreaStyled
        {...rest}
        type={type}
        onChange={onChange}
        value={value}
      />
      <S.Error>{errorText}</S.Error>
    </>
  );
}

TextArea.defaultProps = {
  value: null,
  type: "text",
};

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  errorText: PropTypes.string.isRequired,
};

export default TextArea;
