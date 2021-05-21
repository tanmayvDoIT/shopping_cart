import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from '../Types';
import CartContext from './CartContext';
import cartReducer from './CartReducer';
import React, { useReducer } from 'react';

const CartState = (props) => {
  const initialState = {
    cartData: [],
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (data) => {
    dispatch({
      type: ADD_TO_CART,
      payload: data,
    });
  };

  const increaseQuantity = (id) => {
    dispatch({
      type: INCREASE_QUANTITY,
      payload: id,
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: DECREASE_QUANTITY,
      payload: id,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartData: state.cartData,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
