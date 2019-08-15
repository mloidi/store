import React from 'react';

import { ProductProvider, CartProvider } from '.';

function ProviderComposer({ context, children }) {
  return context.reduceRight(
    (kids, parent) => React.cloneElement(parent, { children: kids }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer context={[<ProductProvider />, <CartProvider />]}>
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
