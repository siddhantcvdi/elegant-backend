import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: [Object],
    default: [],
  },
  addresses: {
    type: Array,
    default: [],
  },
  orders: {
    type: Array,
    default: [],
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;