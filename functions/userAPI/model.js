const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  firstName: {
    type: String,
    required: 'Please supply a name',
    trim: true
  },
  lastName: String,
  userName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: 'Please Supply an email address'
  },
  image: String,
  role: String,
  password: String,
  permissionLevel: Number
});

userSchema.virtual('id').get(function() {
  return this._id.toHexString();
});
// Ensure virtual fields are serialized.
userSchema.set('toJSON', {
  virtuals: true
});
userSchema.findById = function(cb) {
  return this.model('Users').find({ id: this.id }, cb);
};

module.exports = User = mongoose.model('Users', userSchema);
