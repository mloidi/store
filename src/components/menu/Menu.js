import React, { useState } from "react";

import "./Menu.css";
import Icon from "../common/Icon";

const Menu = () => {
  const [showShoppingList, setShowShoppingList] = useState(false);

  const [shoppingCart] = useState([
    { name: "Item 1", quantity: "2", prize: "2" }
  ]);

  return (
    <header className="plr-1 pb-1">
      <div className="menu-title">Mikel & Nicole Store</div>
      <div className="menu-options">
        <div className="mlr-1 p-05 menu-option">Option 1</div>
        <div className="mlr-1 p-05 menu-option">Option 2</div>
        <div className="mlr-1 p-05 menu-option">Option 3</div>
        <div className="mlr-1 p-05 menu-option">Option 4</div>
        <div className="mlr-1 p-05 menu-option">Option 5</div>
      </div>
      <div className="mlr-1 shopping-options">
        <div
          className="shopping-cart"
          onMouseEnter={() => {
            setShowShoppingList(!showShoppingList);
          }}
          onMouseLeave={() => {
            setShowShoppingList(!showShoppingList);
          }}
        >
          <Icon icon="faShoppingCart" />
        </div>
        {showShoppingList && (
          <div className="p-1 shopping-list">
            {shoppingCart &&
              shoppingCart.map(cartItem => (
                <div>
                  {cartItem.name}({cartItem.quantity}) -> {cartItem.prize}{" "}
                </div>
              ))}
          </div>
        )}
        <div className="p-05 shopping-cart-item">{shoppingCart.length}</div>
      </div>
      <div className="mlr-1 account-options">
        <Icon icon="faUser" />
      </div>
    </header>
  );
};

export default Menu;
