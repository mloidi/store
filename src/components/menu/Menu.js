import React, { useState } from "react";

import "./Menu.css";
import Icon from "../common/Icon";

const Menu = () => {
  const [showShoppingList, setShowShoppingList] = useState(false);

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
          onMouseMove={() => {
            setShowShoppingList(!showShoppingList);
          }}
        >
          <Icon icon="faShoppingCart" />
        </div>
        {showShoppingList && (
          <div className="p-1 shopping-list">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </div>
        )}
        <div className="p-05 shopping-cart-item">2</div>
      </div>
      <div className="mlr-1 account-options">
        <Icon icon="faUser" />
      </div>
    </header>
  );
};

export default Menu;
