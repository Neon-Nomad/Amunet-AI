const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/**
 * Create a Stripe subscription for a customer. Expects the request body
 * to contain an email and a payment method ID. The price ID should be
 * supplied via the STRIPE_PRICE_ID environment variable.
 */
exports.createSubscription = async (req, res) => {
  try {
    const { email, payment_method } = req.body;
    // Create or reuse a Stripe customer
    const customer = await stripe.customers.create({
      email,
      payment_method,
      invoice_settings: { default_payment_method: payment_method },
    });
    // Create the subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: process.env.STRIPE_PRICE_ID }],
      expand: ['latest_invoice.payment_intent'],
    });
    res.json({ subscription });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Payment processing error' });
  }
};