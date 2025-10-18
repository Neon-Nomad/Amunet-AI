const jwt = require('jsonwebtoken');

/**
 * Middleware that authenticates requests based on a JWT provided in
 * the Authorization header. The expected header format is
 * `Authorization: Bearer <token>`. On success, the decoded user ID
 * is attached to `req.userId` and the request proceeds. On failure,
 * a 401 response is returned.
 */
exports.authenticate = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(401).json({ error: 'Access denied' });
  }
  const token = authHeader.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};