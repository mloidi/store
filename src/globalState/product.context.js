import React, { createContext, useState } from 'react';

import { ProductService } from '../service/product.service';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState();
  const [salesProducts, setSalesProducts] = useState();

  const loadProducts = async () => {
    setSalesProducts(await ProductService.get());
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        salesProducts,
        loadProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
