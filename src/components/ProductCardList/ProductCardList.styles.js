import styled from "styled-components";
import Button from "../Button/Button";
import Label from "../Label/Label";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px 0;
`;

export const StyledLabel = styled(Label)`
  font-family: "Tiempos Headline";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;

  display: flex;
  align-items: center;
  text-align: center;
  color: #000008;
  margin: 0 auto;
  
  &.choose {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    margin: 12px auto 32px;
  }
`;

export const StyledProductCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem;
  gap: 16px;

  @media (max-width: 35rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledButton = styled(Button)`
  max-width: 240px;
  margin: 0 auto;
`;
