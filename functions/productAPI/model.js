const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    images: [{ url: String }],
    title: String,
    price: String,
    stock: Boolean,
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

productSchema.pre('find', autoPopulate);
productSchema.pre('findOne', autoPopulate);
productSchema.pre('findOneAndUpdate', autoPopulate);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;