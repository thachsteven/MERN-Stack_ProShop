import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import colors from 'colors';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Api is running...');
});

// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// app.get('/api/products/:id', (req, res) => {
//   res.json(products.find((product) => product._id === req.params.id));
// });

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running ${process.env.NODE_ENV}mode on port ${PORT}`.yellow.bold));
