import styled from "styled-components";
import Button from "../Button/Button";
import Label from "../Label/Label";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px 0px;
`;

export const StyledShoppingCardList = styled.div``;

export const StyledDivider = styled.hr``;

export const StyledSubTotalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 40px;
  width: 100%;
`;

export const StyledLabel = styled(Label)`
  font-style: normal;
  font-weight: 700;
  font-family: "Roboto";
  font-size: 24px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #000008;
  margin: 0px auto;

  &.shoppingCart {
    font-family: "Tiempos Headline";
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 8px;
  }

  &.emptyCart {
    margin-top: 50px;
    color: red;
  }
`;

export const StyledButton = styled(Button)`
  max-width: 240px;
  margin: 0 auto;
`;
