import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    totalItems: 0,
    totalPrice: 0,
    products: []
  });

  const [showCart, setShowCart] = useState(false);

  const addToCart = product => {
    const cartCopy = { ...cart };
    cartCopy.totalItems++;
    if (isProductInTheCart(product)) {
      cartCopy.products = cartCopy.products.map(productInTheCart => {
        if (productInTheCart._id === product._id) {
          productInTheCart.quantity++;
          productInTheCart.totalPrice =
            productInTheCart.quantity * productInTheCart.price;
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

  // const addOne = product => {
  //   if (isProductInTheCart(product)) {
  //     const cartCopy = { ...cart };
  //     cartCopy.totalItems++;
  //     cartCopy.products = cartCopy.products.map(productInTheCart => {
  //       if (productInTheCart._id === product._id) {
  //         productInTheCart.quantity++;
  //         productInTheCart.totalPrice =
  //           productInTheCart.quantity * productInTheCart.price;
  //       }
  //       return productInTheCart;
  //     });
  //     cartCopy.totalPrice = calculatePrice(cartCopy.products);
  //     setCart(cartCopy);
  //   }
  // };

  const isProductInTheCart = product => {
    return cart.products.find(productInTheCart => {
      return productInTheCart._id === product._id;
    });
  };
  const calculatePrice = products => {
    let totalPrice = 0;
    products.forEach(productCart => {
      totalPrice = totalPrice + productCart.quantity * productCart.price;
    });
    return totalPrice;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, showCart, setShowCart }}>
      {children}
    </CartContext.Provider>
  );
};
