import styled from "styled-components";
import IconButton from "../IconButton/IconButton";
import Label from "../Label/Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledShoppingCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 3fr 1fr 1fr;
  padding: 24px 0px;
  line-height: 40px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.01em;
`;

export const StyledImage = styled.img`
  height: 40px;
`;

export const StyledLabelBody = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledDescription = styled.div``;

export const StyledIconButton = styled(IconButton)`
  color: #1d9ebc;
  cursor: pointer;
`;

export const StyledLabel = styled(Label)`
  margin: 0px 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 0.01em;
  color: #000008;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #1d9ebc;
  font-size: 10px;
  cursor: pointer;
`;

export const StyledCurrencyPrice = styled.div`
  text-align: right;
`;
