import styled from "styled-components";
import { device } from "utils/MediaQueries";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;
