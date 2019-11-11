import React, { createContext, useState } from 'react';

import { twoDecimals } from '../lib/utils';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    totalItems: 0,
    totalPrice: 0,
    products: []
  });

  const [showCart, setShowCart] = useState(false);

  const add = product => {
    const cartCopy = { ...cart };
    cartCopy.totalItems++;
    if (isProductInTheCart(product)) {
      cartCopy.products = cartCopy.products.map(productInTheCart => {
        if (productInTheCart._id === product._id) {
          productInTheCart.quantity++;
          productInTheCart.totalPrice = twoDecimals(
            productInTheCart.quantity * productInTheCart.price
          );
        }
        return productInTheCart;
      });
    } else {
      const cartItem = {
        _id: product._id,
        name: product.name,
        price: product.store.price,
        totalPrice: product.store.price,
        quantity: 1,
        product
      };
      cartCopy.products.push(cartItem);
    }
    cartCopy.totalPrice = calculatePrice(cartCopy.products);
    setCart(cartCopy);
  };

  const remove = product => {};

  const isProductInTheCart = product => {
    return cart.products.find(productInTheCart => {
      return productInTheCart._id === product._id;
    });
  };

  const calculatePrice = products => {
    const totalPrice = products.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    return twoDecimals(totalPrice);
  };

  const empty = () => {
    setCart({
      totalItems: 0,
      totalPrice: 0,
      products: []
    });
  };
  return (
    <CartContext.Provider
      value={{ cart, add, remove, showCart, setShowCart, empty }}
    >
      {children}
    </CartContext.Provider>
  );
};
