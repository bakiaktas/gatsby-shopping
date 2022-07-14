import * as actionTypes from "../actions/ShoppingActionTypes";

const ShoppingReducer = (state, action) => {
  switch (action?.type) {
    case actionTypes.GET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case actionTypes.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };

    case actionTypes.ADD_PRODUCT_TO_CART:
      let addTemp = [...state.cartProducts];

      const addIndex = addTemp.findIndex(
        (product) => product.id === action.payload.id
      );

      if (addIndex >= 0) {
        addTemp[addIndex].countOfPiece += 1;
        addTemp[addIndex].amount = Math.ceil(
          parseInt(addTemp[addIndex].countOfPiece) *
            parseFloat(addTemp[addIndex].price)
        );
      } else {
        action.payload.amount = action.payload.price;
        addTemp.push(action.payload);
      }

      return {
        ...state,
        cartProducts: [...addTemp],
      };

    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      let removeTemp = [...state.cartProducts];

      const removeIndex = removeTemp.findIndex(
        (product) => product.id === action.payload
      );

      if (removeIndex >= 0) {
        removeTemp.splice(removeIndex, 1);
      }

      return {
        ...state,
        cartProducts: [...removeTemp],
      };

    case actionTypes.MINUS_PRODUCT_FROM_CART:
      let minusTemp = [...state.cartProducts];

      const minusIndex = minusTemp.findIndex(
        (product) => product.id === action.payload
      );

      if (minusIndex >= 0 && minusTemp[minusIndex].countOfPiece > 1) {
        minusTemp[minusIndex].countOfPiece -= 1;
        minusTemp[minusIndex].amount = Math.ceil(
          parseInt(minusTemp[minusIndex].countOfPiece) *
            parseFloat(minusTemp[minusIndex].price)
        );
      }

      return {
        ...state,
        cartProducts: [...minusTemp],
      };

    case actionTypes.PLUS_PRODUCT_TO_CART:
      let plusTemp = [...state.cartProducts];

      const plusIndex = plusTemp.findIndex(
        (product) => product.id === action.payload
      );

      if (plusIndex >= 0) {
        plusTemp[plusIndex].countOfPiece += 1;
        plusTemp[plusIndex].amount = Math.ceil(
          parseInt(plusTemp[plusIndex].countOfPiece) *
            parseFloat(plusTemp[plusIndex].price)
        );
      }

      return {
        ...state,
        cartProducts: [...plusTemp],
      };

    default:
      return state;
  }
};

export default ShoppingReducer;
