const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const apiLimiter = require('./middlewares/rateLimit');
const authRoutes = require('./routes/auth');
const generateRoutes = require('./routes/generate');
const paymentRoutes = require('./routes/payment');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(apiLimiter);

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/generate', generateRoutes);
app.use('/api/payment', paymentRoutes);

// A simple health check route
app.get('/', (req, res) => {
  res.send('Amunet‑AI backend is running');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});