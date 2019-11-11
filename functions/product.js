const api = require('./productAPI');

exports.handler = (event, context, callback) => {
  const send = (statusCode, body) => {
    callback(null, {
      statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Request-With, Content-Type, Accept'
      },
      body: JSON.stringify(body)
    });
  };

  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '');
  const segments = path.split('/').filter(e => e);

  switch (event.httpMethod) {
    case 'GET':
      const productID = segments[2];
      send(200, api.read(productID));
      break;
    case 'POST':
      console.log('POST');
      console.log(event);
      console.log(event.body)
      console.log(JSON.parse(event.body))
      const productToAdd = JSON.parse(event.body).product;
      console.log(productToAdd);
      send(200, api.add(productToAdd, '5c7ee6fbc8f4c32d32e5cb63'));
      break;
    case 'PATCH':
      console.log('PATCH');
      send(200, {});
      break;
    case 'DELETE':
      console.log('DELETE');
      send(200, {});
      break;
    default:
      send(200, 'nope');
      break;
  }
};
