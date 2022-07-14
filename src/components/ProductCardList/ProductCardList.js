import React, { useEffect, useCallback, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useShoppingContext } from "../../store/contexts/ShoppingContext";
import callApi from "../../helpers/callApi";

import {
  GET_TOKEN,
  GET_ALL_PRODUCTS,
} from "../../store/actions/ShoppingActionTypes";

import {
  StyledContainer,
  StyledLabel,
  StyledProductCardList,
  StyledButton,
} from "./ProductCardList.styles";

const ProductCardList = ({}) => {
  const { state, dispatch } = useShoppingContext();
  const [userAgent, setUserAgent] = useState("Web");
  const [viewMore, setViewMore] = useState(4);

  const getToken = useCallback(() => {
    callApi({
      url: "auth/login/",
      method: "POST",
      data: {
        client_id: "HxLhaDeEbq764VpQ",
        password: "HxLhaDeEbq764VpQ",
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      const { token } = res;
      dispatch({
        type: GET_TOKEN,
        payload: token,
      });
    });
  }, []);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (/mobi/i.test(ua)) {
      setUserAgent("Mobile");
      setViewMore(2);
    }

    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOffers = useCallback((token) => {
    callApi({
      url: "merchants/offers/",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((res) => {
      const { results } = res;
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: results,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state.token) {
      getOffers(state.token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.token]);

  const handleClick = () => {
    if (state.products.length > viewMore) {
      const viewMoreCount = userAgent === "Web" ? 4 : 2;
      const tempViewMore = viewMore + viewMoreCount;
      setViewMore(tempViewMore);
    }
  };

  return (
    <StyledContainer>
      <StyledLabel label="Store" />
      <StyledLabel label="Choose your product" className="choose" />
      <StyledProductCardList data-testid="productCardListId">
        {state.products?.slice(0, viewMore).map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.image}
              description={product.short_description}
              price={product.price}
              currency={product.currency}
            />
          );
        })}
      </StyledProductCardList>
      {state.products.length >= viewMore && (
        <StyledButton variant="outlined" onClick={handleClick}>
          VIEW MORE
        </StyledButton>
      )}
    </StyledContainer>
  );
};

export default ProductCardList;
