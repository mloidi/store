import React, { useState, useContext } from 'react';
import { NavLink as Link } from 'react-router-dom';

import './Menu.css';
import Icon from '../common/Icon';
import { CartContext } from '../../globalState';
import Cart from '../cart/Cart';

const Menu = () => {
  const { cart, showCart, setShowCart } = useContext(CartContext);
  const [showShoppingList, setShowShoppingList] = useState(false);

  const menu = [
    {
      icon: null,
      name: 'Weekly Sales',
      path: '/weekly-sales',
      role: ['PUBLIC']
    },
    {
      icon: null,
      name: 'Order Online',
      path: '/order-online',
      role: ['PUBLIC']
    },
    {
      icon: null,
      name: 'Browse Products',
      path: '/brose-products',
      role: ['PUBLIC']
    }
  ];

  return (
    <header className="plr-1 pb-1 mb-1">
      <Link className="menu-title" activeClassName="menu-title" exact to="/">
        M & N
      </Link>
      <div className="menu-options">
        {menu.map(menu => (
          <React.Fragment key={menu.name}>
            <Link
              className="mlr-1 p-05 menu-option"
              activeClassName="menu-option-selected"
              exact
              to={menu.path}
              onClick={() => {
                setShowCart(false);
                setShowShoppingList(false);
              }}
            >
              {menu.name}
            </Link>
          </React.Fragment>
        ))}
      </div>
      <div className="mlr-1 shopping-options">
        <div
          className="menu-cart"
          onClick={() => {
            setShowCart(true);
            setShowShoppingList(!showShoppingList);
          }}
        >
          <Icon icon="faShoppingCart" />
        </div>
        <div className="p-05 menu-cart-total-items">{cart.totalItems}</div>
        {showCart && (
          <div
            className={
              showShoppingList
                ? 'p-1 menu-cart-list menu-cart-open'
                : 'p-1 menu-cart-list menu-cart-close'
            }
          >
            <Cart />
          </div>
        )}
      </div>
      <div className="mlr-1 account-options">
        <Icon icon="faUser" />
      </div>
    </header>
  );
};

export default Menu;
