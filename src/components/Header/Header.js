import React from "react";
import { useShoppingContext } from "../../store/contexts/ShoppingContext";
import { Link, navigate } from "gatsby";

import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import {
  StyledHeader,
  StyledHeaderMenu,
  StyledImage,
  StyledHeaderUser,
  StyledIconButton,
  StyledLabel,
  StyledCart,
  StyledChip,
} from "./Header.styles";

import ImageUrl from "../../images/logo.png";

const Header = (props) => {
  const { state, dispatch } = useShoppingContext();

  const handleClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <StyledHeader>
      <StyledHeaderMenu>
        <StyledImage src={ImageUrl} onClick={handleClick} />
        <StyledIconButton icon={faMagnifyingGlass} className="find" />
        <StyledLabel label="Store" />
        <StyledLabel label="About" />
      </StyledHeaderMenu>
      <StyledHeaderUser>
        <Link to="/shopping">
          <StyledCart>
            <StyledIconButton icon={faCartShopping} className="shop" />
            <StyledChip
              label={state?.cartProducts?.length.toString()}
              className="cart"
            />
          </StyledCart>
        </Link>
        <StyledChip label="FF" />
        <StyledLabel label="Frank Frazetta" className="user" />
      </StyledHeaderUser>
    </StyledHeader>
  );
};

export default Header;
