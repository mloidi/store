import React, {  useContext } from 'react';
import { withRouter } from 'react-router';
// import { CSSTransitionGroup } from 'react-transition-group';

import Icon from '../common/Icon';
import { CartContext } from '../../globalState';

const ProductCard = ({ product, history }) => {
  const { add } = useContext(CartContext);
  // const [addingProduct, setAddingProduct] = useState({ id: 1 });

  // const addingProductAnimation = <div key={addingProduct.id} />;

  return (
    <div className="product-card p-1 m-1">
      <div
        className="product"
        onClick={() => {
          const to = '/weekly-sales/' + product.slug;
          history.push(to);
        }}
      >
        <img
          className="product-image"
          src={product.image.source}
          alt={product.name}
        />
        <div className="mt-1">{'$' + product.store.price}</div>
        <div className="mt-1 product-title">{product.name}</div>
      </div>
      <button
        className="product-button-add-cart"
        onClick={() => {
          // setAddingProduct({ id: Math.random() });
          add(product);
        }}
      >
        <Icon icon="faCartPlus" />
      </button>
      {/* <CSSTransitionGroup
        transitionName="progressBar"
        transitionEnterTimeout={1000}
        transitionLeave={false}
      >
        {addingProductAnimation}
      </CSSTransitionGroup> */}
    </div>
  );
};

export default withRouter(ProductCard);
