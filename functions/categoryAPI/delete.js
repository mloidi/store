const mongoose = require('mongoose');
const CategoryModel = require('./model');
require('dotenv').config();

module.exports = async categoryID => {
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

  const categoryDeleted = await CategoryModel.deleteOne({ _id: categoryID });
  mongoose.connection.close();
  return categoryDeleted;
};
