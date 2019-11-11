import React, { useState } from 'react';
import Input from '../common/element/Input';

import { ProductService } from '../../service/product.service';

const OrderOnline = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div className="mlr-4">
      <div className="page-title">Order Online</div>
      <div>
        <Input
          type="text"
          placeHolder="Title"
          ariaLabel="Title"
          name="title"
          value={title}
          setValue={setTitle}
        />
        <Input
          type="number"
          placeHolder="Price"
          ariaLabel="Price"
          name="price"
          value={price}
          setValue={setPrice}
        />
        <button
          onClick={() => {
            ProductService.save({ title, price }, true);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default OrderOnline;
