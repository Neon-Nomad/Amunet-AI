const express = require('express');
const { generateText, generateImage } = require('../controllers/generate');
const { authenticate } = require('../middlewares/auth');

const router = express.Router();

// POST /api/generate/text
router.post('/text', authenticate, generateText);

// POST /api/generate/image
router.post('/image', authenticate, generateImage);

module.exports = router;