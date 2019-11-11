import React, { useContext, useEffect } from 'react';

import { ProductContext } from '../../globalState';
import ProductCard from '../products/ProductCard';

const WeeklySales = () => {
  const { salesProducts, loadProducts } = useContext(ProductContext);

  useEffect(() => {
    if (!salesProducts || salesProducts.length === 0) {
      loadProducts();
    }
    return () => {
      console.log('clean');
    };
  });

  return (
    <div className="mlr-4">
      <div className="page-title">Deals & Sales</div>
      <div className="products">
        {salesProducts &&
          salesProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default WeeklySales;
