const rateLimit = require('express-rate-limit');

/**
 * Global API rate limiter. Limits each IP to a maximum number of
 * requests within a fixed time window (default 15 minutes). You can
 * adjust the `windowMs` and `max` values as needed. Exceeding the
 * limit will return a 429 status with a simple error message.
 */
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  message: { error: 'Too many requests, please try again later.' },
});

module.exports = apiLimiter;