const mongoose = require('mongoose');
const CategoryModel = require('./model');
require('dotenv').config();

module.exports = async (categoryToAdd, userId) => {
  if (categoryToAdd) {
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

    categoryToAdd.updatedBy = userId;
    const categoryAdded = await new CategoryModel(categoryToAdd).save();
    mongoose.connection.close();
    return categoryAdded;
  } else {
    return { errors: "category can't be added" };
  }
};
