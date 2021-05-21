import React, { useState, useEffect, useContext } from 'react';
import ProductItem from '../components/ProductItem';
import { data } from '../dummyData';
import CartContext from '../context/cart/CartContext';

const Products = () => {
  const cartContext = useContext(CartContext);
  const { addToCart, cartData } = cartContext;

  // console.log(data);

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      console.log(cartItems);
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);

      console.log(cartItems);
    }
  };

  useEffect(() => {
    if (cartItems.length !== 0) {
      addToCart(cartItems);
    } else if (cartItems.length === 0 && cartData.length !== 0) {
      setCartItems([...cartData]);
    }
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className="container mb-5 mt-5 pt-5">
      <div className="row p-0 m-0">
        {data.map((item) => (
          <ProductItem key={item.id} item={item} onAdd={(e) => onAdd(e)} />
        ))}
      </div>
    </div>
  );
};

export default Products;
