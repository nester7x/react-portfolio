import styled from "styled-components";
import Textarea from "@mui/joy/Textarea";

export const TextAreaStyled = styled(Textarea)`
  && {
    background-color: #ffffff;
    padding: 10px 15px;
    input {
      padding: 0;
    }
  }
`;

export const Error = styled.p`
  font-size: 12px;
  color: #ff3523;
`;
