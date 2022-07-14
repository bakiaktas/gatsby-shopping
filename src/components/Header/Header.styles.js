import styled from "styled-components";
import IconButton from "../IconButton/IconButton";
import Label from "../Label/Label";
import Chip from "../Chip/Chip";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  padding: 7px 32px;
`;

export const StyledHeaderMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImage = styled.img`
  margin-right: 40px;
  cursor: pointer;
`;

export const StyledHeaderUser = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIconButton = styled(IconButton)`
  &.find {
    margin-right: 65px;
  }

  color: #000000;
`;

export const StyledLabel = styled(Label)`
  margin-right: 24px;
  &.user {
    margin: 0px;
  }
`;

export const StyledCart = styled.div`
  position: relative;
  width: fit-content;
  margin-right: 32px;
`;

export const StyledChip = styled(Chip)`
  margin-right: 12px;

  &.cart {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 9px;
    padding: 4px;
    background-color: red;
    color: white;
  }
`;
