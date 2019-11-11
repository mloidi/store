const api = require('./categoryAPI');

exports.handler = (event, context, callback) => {
  const send = (statusCode, body) => {
    callback(null, {
      statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Request-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
      },
      body: JSON.stringify(body)
    });
  };
  const path = event.path.replace('/category', '');
  const segments = path.split('/').filter(e => e);
  const categoryID = segments[segments.length - 1];
  switch (event.httpMethod) {
    case 'GET':
      api.read(categoryID).then(category => {
        send(200, category);
      });
      break;
    case 'POST':
      api.add(JSON.parse(event.body).category, '5c7ee6fbc8f4c32d32e5cb63').then(categorySaved => {
        send(200, categorySaved);
      });
      break;
    case 'PATCH':
        api.edit(JSON.parse(event.body).category, '5c7ee6fbc8f4c32d32e5cb63').then(categorySaved => {
          send(200, categorySaved);
        });
      break;
    case 'DELETE':
      api.delete(categoryID).then(categoryDeleted => {
        send(200, categoryDeleted);
      });
      break;
    default:
      send(200, 'nope');
      break;
  }
};
