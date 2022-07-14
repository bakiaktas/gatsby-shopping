import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useShoppingContext } from "../../store/contexts/ShoppingContext";
import { toast } from "react-toastify";
import { faTrash, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import {
  REMOVE_PRODUCT_FROM_CART,
  MINUS_PRODUCT_FROM_CART,
  PLUS_PRODUCT_TO_CART,
} from "../../store/actions/ShoppingActionTypes";

import {
  StyledShoppingCard,
  StyledImage,
  StyledLabelBody,
  StyledDescription,
  StyledIconButton,
  StyledLabel,
  StyledFontAwesomeIcon,
  StyledCurrencyPrice,
} from "./ShoppingCard.styles";

const ShoppingCard = ({
  id,
  imageUrl,
  description,
  price,
  currency,
  currencyAlignment,
}) => {
  const { state, dispatch } = useShoppingContext();
  const [counter, setCounter] = useState(1);

  const handleRemoveClick = () => {
    dispatch({
      type: REMOVE_PRODUCT_FROM_CART,
      payload: id,
    });

    toast("This product remove to cart!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000,
    });
  };

  const handleMinusClick = () => {
    setCounter(counter - 1);

    if (counter > 1) {
      dispatch({
        type: MINUS_PRODUCT_FROM_CART,
        payload: id,
      });

      toast("The quantity of the product was reduced by one!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000,
      });
    } else {
      setCounter(1);
    }
  };

  const handlePlusClick = () => {
    setCounter(counter + 1);

    dispatch({
      type: PLUS_PRODUCT_TO_CART,
      payload: id,
    });

    toast("The quantity of the product was increased by one!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000,
    });
  };

  return (
    <StyledShoppingCard data-testid="shoppingCardId">
      <StyledImage src={imageUrl} />
      <StyledDescription>{description}</StyledDescription>
      <StyledIconButton icon={faTrash} onClick={handleRemoveClick} />
      <StyledLabelBody>
        <StyledFontAwesomeIcon icon={faMinus} onClick={handleMinusClick} visa />
        <StyledLabel label={counter.toString()} />
        <StyledFontAwesomeIcon icon={faPlus} onClick={handlePlusClick} />
      </StyledLabelBody>
      <StyledCurrencyPrice>
        {currencyAlignment === "left" ? currency + price : price + currency}
      </StyledCurrencyPrice>
    </StyledShoppingCard>
  );
};

ShoppingCard.propTypes = {
  id: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string,
  currencyAlignment: PropTypes.oneOf(["left", "right"]),
};

export default ShoppingCard;
