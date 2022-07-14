import styled from "styled-components";
import Button from "../Button/Button";

export const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.1;
  display: none;
`;

export const StyledBuy = styled(Button)`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: none;
`;

export const StyledProductCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  min-height: 240px;
  cursor: pointer;

  &:hover {
    ${StyledDiv}, ${StyledBuy} {
      display: block;
    }
  }
`;

export const StyledImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 130px;
`;

export const StyledImage = styled.img`
  height: 130px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledBody = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  font-family: "Tiempos Headline";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.01em;
`;

export const StyledDescription = styled.div`
  color: #000008;
`;

export const StyledCurrencyPrice = styled.div`
  word-wrap: normal;
  width: fit-content;
  color: #1d9ebc;
`;
