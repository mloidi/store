const mongoose = require('mongoose');
const ProductModel = require('./model');
require('dotenv').config();

module.exports = async (productToAdd, userId) => {
  console.log('add product', productToAdd);
  if (productToAdd) {
    // Connect to MongoDB
    mongoose.set('useCreateIndex', true);
    mongoose.connect(process.env.REACT_APP_DATABASE, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    mongoose.connection.on('error', err => {
      console.error(`Error connecting with mongodb → ${err.message}`);
    });

    productToAdd.updatedBy = userId;
    const productAdded = await new ProductModel(productToAdd).save();
    mongoose.connection.close();
    return productAdded;
  } else {
    return { errors: "product can't be added" };
  }
};
