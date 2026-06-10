require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./src/models/Product');

const data = [
  { title: 'iPhone 15 Pro', price: 999, category: 'phone',
    description: 'Apple flagship', image: 'https://picsum.photos/seed/1/200' },
  { title: 'Samsung Galaxy S24', price: 899, category: 'phone',
    description: 'Android flagship', image: 'https://picsum.photos/seed/2/200' },
  { title: 'MacBook Air M3', price: 1299, category: 'laptop',
    description: '13-inch Apple Silicon', image: 'https://picsum.photos/seed/3/200' },
  { title: 'AirPods Pro 2', price: 249, category: 'audio',
    description: 'ANC earbuds', image: 'https://picsum.photos/seed/4/200' },
  { title: 'iPad Air', price: 599, category: 'tablet',
    description: '11-inch tablet', image: 'https://picsum.photos/seed/5/200' },
];

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany({});
  await Product.insertMany(data);
  console.log('✅ Seeded', data.length, 'products');
  process.exit();
})();