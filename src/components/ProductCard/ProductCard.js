import React from "react";
import PropTypes from "prop-types";
import { useShoppingContext } from "../../store/contexts/ShoppingContext";
import IconButton from "../IconButton/IconButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import { ADD_PRODUCT_TO_CART } from "../../store/actions/ShoppingActionTypes";

import {
  StyledDiv,
  StyledBuy,
  StyledProductCard,
  StyledImageContainer,
  StyledImage,
  StyledBody,
  StyledDescription,
  StyledCurrencyPrice,
} from "./ProductCard.styles";

const ProductCard = ({
  id,
  imageUrl,
  description,
  price,
  currency,
  currencyAlignment,
}) => {
  const { state, dispatch } = useShoppingContext();

  const handleClick = () => {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: {
        id,
        image: imageUrl,
        short_description: description,
        price,
        currency,
        currencyAlignment,
        countOfPiece: 1,
        amount: 0,
      },
    });

    toast("This product added to cart!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000,
    });
  };

  return (
    <StyledProductCard data-testid="productCardId">
      <StyledImageContainer>
        <StyledImage src={imageUrl} />
        <StyledDiv />
        <StyledBuy variant="icon" onClick={handleClick}>
          <IconButton icon={faPlus} />
        </StyledBuy>
      </StyledImageContainer>
      <StyledBody>
        <StyledDescription>{description}</StyledDescription>
        <StyledCurrencyPrice>
          {currencyAlignment === "left" ? currency + price : price + currency}
        </StyledCurrencyPrice>
      </StyledBody>
    </StyledProductCard>
  );
};

ProductCard.defaultProps = {
  currency: "€",
  currencyAlignment: "left",
};

ProductCard.propTypes = {
  id: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string,
  currencyAlignment: PropTypes.oneOf(["left", "right"]),
};

export default ProductCard;
