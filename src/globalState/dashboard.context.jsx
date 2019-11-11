import React, { createContext, useState } from 'react';

import { DashboardCategories } from '../components/DashboardCategories';
import { DashboardProducts } from '../components/DashboardProducts';
import { DashboardCustomers } from '../components/DashboardCustomers';
import { DashboardOrders } from '../components/DashboardOrders';
import { DashboardInvoices } from '../components/DashboardInvoices';

import { FIELD_TYPE } from '../lib/constants';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [dashboardOptions] = useState([
    {
      name: 'Categories',
      color: 'green',
      path: '/dashboard/categories',
      component: <DashboardCategories />,
      title: 'categories',
      fields: [
        { type: FIELD_TYPE._TEXT, label: 'Name', default: '' },
        {
          type: FIELD_TYPE._SELECT,
          label: 'type',
          default: '',
          values: ['food', 'electronic']
        },
        { type: FIELD_TYPE._CHECK, label: 'publish', default: false },
        { type: FIELD_TYPE._NUMBER, label: 'number', default: 0 }
      ]
    },
    {
      name: 'Products',
      color: 'teal',
      path: '/dashboard/products',
      component: <DashboardProducts />,
      title: 'Products',
      fields: [{ type: FIELD_TYPE._TEXT, label: 'Name', default: '' }]
    },
    {
      name: 'Customers',
      color: 'red',
      path: '/dashboard/customers',
      component: <DashboardCustomers />,
      title: 'customers',
      fields: [{ type: FIELD_TYPE._TEXT, label: 'Name', default: '' }]
    },
    {
      name: 'Orders',
      color: 'yellow',
      path: '/dashboard/orders',
      component: <DashboardOrders />,
      title: 'orders',
      fields: [{ type: FIELD_TYPE._TEXT, label: 'Name', default: '' }]
    },
    {
      name: 'Invoices',
      color: 'blue',
      path: '/dashboard/invoices',
      component: <DashboardInvoices />,
      title: 'invoices',
      fields: [{ type: FIELD_TYPE._TEXT, label: 'Name', default: '' }]
    }
  ]);

  const getDashboardOption = option => {
    return dashboardOptions.find(dashboardOption => {
      return dashboardOption.name.toUpperCase() === option.toUpperCase();
    });
  };

  return (
    <DashboardContext.Provider value={{ dashboardOptions, getDashboardOption }}>
      {children}
    </DashboardContext.Provider>
  );
};
