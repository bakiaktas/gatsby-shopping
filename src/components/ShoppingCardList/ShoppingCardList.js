import React, { useEffect, useState } from "react";
import { useShoppingContext } from "../../store/contexts/ShoppingContext";
import ShoppingCard from "../ShoppingCard/ShoppingCard";

import {
  StyledContainer,
  StyledShoppingCardList,
  StyledDivider,
  StyledSubTotalContainer,
  StyledLabel,
  StyledButton,
} from "./ShoppingCardList.styles";

const ShoppingCardList = ({}) => {
  const { state } = useShoppingContext();
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    console.log(
      "🚀 ~ file: ShoppingCardList.js ~ line 16 ~ ShoppingCardList ~ state",
      state?.cartProducts
    );
    let subAmountTotal = 0;
    if (state?.cartProducts?.length > 0) {
      subAmountTotal = state?.cartProducts?.reduce(
        (acc, item) => acc + parseFloat(item.amount),
        0
      );
    }
    setSubTotal(subAmountTotal);
  }, [state?.cartProducts]);

  return (
    <StyledContainer>
      <StyledLabel label="Shopping cart" className="shoppingCart" />
      {state?.cartProducts?.length > 0 ? (
        <>
          <StyledShoppingCardList data-testid="shoppingCardListId">
            {state?.cartProducts?.map((cartProduct) => {
              return (
                <>
                  <ShoppingCard
                    key={cartProduct.id}
                    id={cartProduct.id}
                    imageUrl={cartProduct.image}
                    description={cartProduct.short_description}
                    price={cartProduct.amount}
                    currency={cartProduct.currency}
                    currencyAlignment={cartProduct.currencyAlignment}
                  />
                  <StyledDivider />
                </>
              );
            })}
          </StyledShoppingCardList>
          <StyledSubTotalContainer>
            <StyledLabel
              label={`Subtotal (${state?.cartProducts?.length} items)`}
            />
            <StyledLabel
              label={
                state?.cartProducts[0]?.currencyAlignment === "left"
                  ? state?.cartProducts[0]?.currency + " " + subTotal
                  : subTotal + " " + state?.cartProducts[0]?.currency
              }
            />
          </StyledSubTotalContainer>
          <StyledButton variant="contained">CHECKOUT</StyledButton>
        </>
      ) : (
        <StyledLabel
          label="There is no product in your cart."
          className="emptyCart"
        />
      )}
    </StyledContainer>
  );
};

export default ShoppingCardList;
