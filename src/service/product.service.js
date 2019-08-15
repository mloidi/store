import { GET, POST, PATCH, DELETE, setRequestOptions } from './util.service.js';

import { getToken } from '../lib/utils';

const baseURL = process.env.REACT_APP_BACKEND_URL + '/product';

export const ProductService = {
  get: async () => {
    const url = baseURL + '/public';
    const requestOptions = setRequestOptions({
      method: GET
    });
    const req = new Request(url, requestOptions);
    const response = await fetch(req);
    return await response.json();
  },
  getBySlug: async slug => {
    const url = baseURL + '/public/' + slug;
    const requestOptions = setRequestOptions({
      method: GET
    });
    const req = new Request(url, requestOptions);
    const response = await fetch(req);
    return await response.json();
  },
  save: async (product, isNew) => {
    const token = getToken();
    const url = baseURL + '/';
    const requestOptions = setRequestOptions({
      method: isNew ? POST : PATCH,
      token,
      body: { product }
    });
    const req = new Request(url, requestOptions);
    const response = await fetch(req);
    return await response.json();
  },
  delete: async id => {
    const token = getToken();
    const url = baseURL + '/' + id;
    const requestOptions = setRequestOptions({
      method: DELETE,
      token
    });
    const req = new Request(url, requestOptions);
    const response = await fetch(req);
    return await response.json();
  }
};
