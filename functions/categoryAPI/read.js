const mongoose = require('mongoose');
const CategoryModel = require('./model');
require('../userAPI/model.js');
require('dotenv').config();

module.exports = async categoryID => {
  let category = null;
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
  if (categoryID) {
    category = await CategoryModel.find({ _id: categoryID });
  } else {
    // category = await CategoryModel.find({ updatedBy: req.userId }).sort({
    category = await CategoryModel.find().sort({
      name: 'ASC'
    });
  }
  mongoose.connection.close();
  return category;
};
