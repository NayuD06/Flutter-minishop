const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be >= 0'],
    },
    description: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/150',
    },
  },
  { timestamps: true } // tự động thêm createdAt, updatedAt
);
module.exports = mongoose.model('Product', productSchema);