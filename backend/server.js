import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  res.json(products.find((product) => product._id === req.params.id));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running ${process.env.NODE_ENV}mode on port ${PORT}`));
