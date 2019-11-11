const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: String,
    categories: String,
    type: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
      }
    ],
    created: {
      type: Date,
      default: Date.now
    },
    updated: {
      type: Date
    },
    updatedBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'Users'
      //   required: 'Updated by'
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

function autoPopulate(next) {
  this.populate('updatedBy');
  next();
}

categorySchema.pre('find', autoPopulate);
categorySchema.pre('findOne', autoPopulate);
categorySchema.pre('findOneAndUpdate', autoPopulate);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
