import { GET, POST, PATCH, DELETE, setRequestOptions } from './util.service.js';

import { getToken } from '../lib/utils';

const baseURL = process.env.REACT_APP_BACKEND_URL + '/category';

export const CategoryService = {
  get: async () => {
    const url = baseURL;
    const requestOptions = setRequestOptions({
      method: GET
    });
    const req = new Request(url, requestOptions);
    const response = await fetch(req);
    return await response.json();
  },
  getByID: async categoryID => {
    const url = baseURL + '/' + categoryID;
    const requestOptions = setRequestOptions({
      method: GET
    });
    const req = new Request(url, requestOptions);
    const response = await fetch(req);
    return await response.json();
  },
  save: async (category, isNew) => {
    const token = getToken();
    const url = baseURL + '/';
    const requestOptions = setRequestOptions({
      method: isNew ? POST : PATCH,
      token,
      body: { category }
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
