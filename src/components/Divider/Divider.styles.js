import styled, { css } from "styled-components";

export const StyledDivider = styled.hr`
  background-color: ${(p) => (p.color ? p.color : "#C4C4C4")};
  border: none;
  height: 0.063rem;
  margin: 0rem;
  flex-shrink: 0;

  ${(p) =>
    p.orientation === "vertical" &&
    css`
      width: 0.063rem;
      height: 100%;
    `}
`;
