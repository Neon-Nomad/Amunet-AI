// src/server/index.ts
import express from 'express';
import dotenv from 'dotenv';
import routes from './api/routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Routes
app.use(routes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Amunet API running on http://localhost:${PORT}`);
});

export default app;
