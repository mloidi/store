import React, { useState, useEffect } from 'react';

import { ProductService } from '../../service/product.service';
import Icon from '../common/Icon';

const ProductDetail = ({ match, history }) => {
  const slug = match.params.slug;
  const [product, setProduct] = useState();
  const [productLoaded, setProductLoaded] = useState(false);

  useEffect(() => {
    if (!product) {
      ProductService.getBySlug(slug).then(response => {
        setProduct(response);
        setProductLoaded(true);
      });
    }
    return () => {
      console.log('clean ProductDetail');
    };
  }, [product, slug]);

  return (
    <div className="mt-1 mlr-4">
      <button
        className="navigation-button"
        onClick={() => {
          history.goBack();
        }}
      >
        <Icon icon="faArrowLeft" />
      </button>
      {productLoaded && (
        <React.Fragment>
          <div className="page-title">{product.name}</div>
          <img src={product.image.thumbnail} alt={product.name} />
        </React.Fragment>
      )}
    </div>
  );
};

export default ProductDetail;
