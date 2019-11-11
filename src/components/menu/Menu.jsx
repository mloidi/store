import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import Icon from '../common/icons/Icon';
import { faIcons } from '../common/icons/IconsConstant';

const Menu = () => {
  const menu = [
    {
      icon: null,
      name: 'Categories',
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
    <nav className="flex flex-wrap items-start lg:items-center lg:justify-between border-b-2 border-gray-200 px-6 py-2">
      {/* <div className="lg:text-2xl text-gray-500 mt-1 lg:mt-0">
        <button className="hover:text-black">
          <Icon icon={faIcons._faAlignJustify} />
        </button>
      </div> */}
      <div className="px-2 text-black font-semibold tracking-tight border-r-2 border-l-2 rounded border-black justify-start">
        <div className="text-2xl">My sweet</div>
        <div className="text-sm">store</div>
      </div>
      <div className="flex items-center w-auto lg:hidden block">
        {menu.map(menu => (
          <React.Fragment key={menu.name}>
            <Link
              className="mx-1 p-1 inline-block text-gray-500 hover:text-gray-800 border-r border-l rounded border-transparent hover:border-gray-800"
              activeClassName="text-gray-900 border-gray-900 border-2"
              exact
              to={menu.path}
            >
              C
              {/* <Icon icon={menu.icon} /> */}
            </Link>
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center w-auto hidden lg:block">
        {menu.map(menu => (
          <React.Fragment key={menu.name}>
            <Link
              className="mx-4 p-1 inline-block text-gray-500 hover:text-gray-800 border-r border-l rounded border-transparent hover:border-gray-800"
              activeClassName="text-gray-900 border-gray-900 border-2"
              exact
              to={menu.path}
            >
              {menu.name}
            </Link>
          </React.Fragment>
        ))}
      </div>
      <div className="block lg:hidden w-full"></div>
      <div className="lg:text-2xl text-gray-500 mt-1 lg:mt-0 flex justify-between">
        <button className="hover:text-black">
          <Icon icon={faIcons._faUser} />
        </button>
        <button className="hover:text-black">
          <Icon icon={faIcons._faShoppingCart} />
        </button>
      </div>
    </nav>
  );
};

export default Menu;
