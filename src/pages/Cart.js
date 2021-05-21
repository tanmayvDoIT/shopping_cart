import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../context/cart/CartContext';

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cartData, increaseQuantity, decreaseQuantity } = cartContext;
  const [sum, setSum] = useState(null);
  // const [arr, setArr] = useState({});

  useEffect(() => {
    console.log(cartData);
  }, [cartData]);

  const addQuantity = (data) => {
    increaseQuantity(data.id);
  };

  const subtractQuantity = (data) => {
    decreaseQuantity(data.id);
  };

  useEffect(() => {
    let amount = 0;
    for (let i = 0; i < cartData.length; i++) {
      // setSum(sum + cartData[i].qty * cartData[i].price);
      amount = amount + cartData[i].qty * cartData[i].price;
    }
    setSum(amount);
  }, [cartData]);

  return (
    <div className="container mt-5 pt-5">
      <h1>CART ITEMS</h1>
      <div className="card">
        <div className="card-body">
          <div className="row font-weight-bold mb-2">
            <div className="col-4">PRODUCT</div>
            <div className="col-2">QTY</div>
            <div className="col-4"></div>
            <div className="col-2">PRICE</div>
          </div>
          {cartData.map((data) => (
            <div key={data.id} className="py-2">
              <div className="row">
                <div className="col-4">{data.name}</div>
                <div className="col-2">{`${data.qty} * ${data.price}`}</div>
                <div className="col-4 text-center">
                  <span>
                    <button
                      className="btn bg-primary"
                      onClick={() => addQuantity(data)}
                    >
                      +
                    </button>
                  </span>
                  <span>
                    <button
                      className="btn bg-danger"
                      onClick={() => subtractQuantity(data)}
                    >
                      -
                    </button>
                  </span>
                </div>
                <div className="col-2">{data.price * data.qty}</div>
              </div>
            </div>
          ))}
          {cartData.length && (
            <div className="text-right pr-5 font-weight-bold">
              TOTAL : {sum}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
