import React, { useContext } from 'react';

import './Cart.css';
import { CartContext } from '../../globalState';
import Icon from '../common/Icon';

const Cart = () => {
  const { cart, add, remove, empty } = useContext(CartContext);

  return (
    <React.Fragment>
      {cart.totalItems === 0 ? (
        <div>No items</div>
      ) : (
        <React.Fragment>
          {cart.products.map(productInTheCart => (
            <div className="cart-list-line" key={productInTheCart._id}>
              <div className="cart-list-line-item">{productInTheCart.name}</div>
              <div className="cart-list-line-quantity">
                <button
                  className="cart-button"
                  onClick={() => {
                    remove(productInTheCart);
                  }}
                >
                  <Icon icon="faMinus" />
                </button>
                <span>{productInTheCart.quantity}</span>
                <button
                  className="cart-button"
                  onClick={() => {
                    add(productInTheCart);
                  }}
                >
                  <Icon icon="faPlus" />
                </button>
              </div>
              <div className="cart-list-line-price">
                <span>{'$' + productInTheCart.totalPrice}</span>
              </div>
            </div>
          ))}
          <div>{'$' + cart.totalPrice} </div>
          <button
            onClick={() => {
              empty();
            }}
          >
            Empty cart
          </button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Cart;
