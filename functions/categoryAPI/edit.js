const mongoose = require('mongoose');
const CategoryModel = require('./model');
require('dotenv').config();

module.exports = async (categoryToSave, userId) => {
  if (categoryToSave) {
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

    categoryToSave.updatedBy = userId;
    categoryToSave.update = Date.now();
    const categorySaved = await CategoryModel.findOneAndUpdate(
      { _id: categoryToSave._id },
      categoryToSave,
      { new: true, runValidators: true }
    ).exec();

    mongoose.connection.close();
    return categorySaved;
  } else {
    return { errors: "category can't be edited" };
  }
};
