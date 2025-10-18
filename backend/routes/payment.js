const express = require('express');
const { createSubscription } = require('../controllers/payment');
const { authenticate } = require('../middlewares/auth');

const router = express.Router();

// POST /api/payment/subscribe
router.post('/subscribe', authenticate, createSubscription);

module.exports = router;