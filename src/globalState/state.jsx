import React from 'react';

import { ProductProvider, CartProvider, DashboardProvider } from '.';

function ProviderComposer({ context, children }) {
  return context.reduceRight(
    (kids, parent) => React.cloneElement(parent, { children: kids }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer
      context={[<ProductProvider />, <CartProvider />, <DashboardProvider />]}
    >
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
