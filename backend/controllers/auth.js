const User = require('../models/User');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');

/**
 * Register a new user, hash their password, insert into the database,
 * generate a JWT, send a verification email, and return the token.
 */
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findByEmail(email);
    if (userExists) {
      return res.status(400).json({ error: 'Email exists' });
    }
    const user = await User.create(email, password);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Configure mailer using SendGrid
    const transporter = nodemailer.createTransport({
      service: 'SendGrid',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    // Construct verification URL. The frontend URL should be provided via env.
    const verifyUrl = `${process.env.FRONTEND_URL || ''}/verify?token=${token}`;

    await transporter.sendMail({
      to: email,
      subject: 'Verify Your Amunet‑AI Account',
      html: `<p>Welcome to Amunet‑AI!</p><p><a href="${verifyUrl}">Click here to verify your account</a></p>`,
    });

    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * Authenticate an existing user by comparing the provided password
 * against the stored hash. Returns a signed JWT on success.
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};