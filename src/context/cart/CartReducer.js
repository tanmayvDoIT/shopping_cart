import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from '../Types';

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: action.payload,
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartData: state.cartData.filter((data) => {
          if (data.id === action.payload) {
            return (data.qty = data.qty + 1);
          } else {
            return data;
          }
          // data.id === action.payload ? return data.qty = data.qty + 1
        }),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cartData: state.cartData.filter((data) => {
          if (data.id === action.payload) {
            return (data.qty = data.qty - 1);
          } else {
            return data;
          }
          // data.id === action.payload ? return data.qty = data.qty + 1
        }),
      };

    default:
      return {
        ...state,
      };
  }
};
