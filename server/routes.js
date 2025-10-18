import { Router } from 'express';
import { supabase } from './supabase.js';

export const router = Router();

router.post('/signup', async (req, res) => {
  const {
    email,
    name,
    business_name: businessName,
    phone,
    plan_name: planName,
    plan_price: planPrice,
  } = req.body || {};

  if (!email || !name || !businessName || !phone || !planName || !planPrice) {
    return res.status(400).json({
      error: 'Missing required fields',
      required: ['email', 'name', 'business_name', 'phone', 'plan_name', 'plan_price'],
    });
  }

  const { data, error } = await supabase
    .from('trial_signups')
    .insert({
      email,
      name,
      business_name: businessName,
      phone,
      plan_name: planName,
      plan_price: planPrice,
    })
    .select()
    .single();

  if (error) {
    const status = error.code === '23505' ? 409 : 500; // unique_violation
    return res.status(status).json({ error: error.message, code: error.code });
  }

  return res.status(201).json({ id: data.id, created_at: data.created_at });
});

router.post('/demo-request', async (req, res) => {
  const { email, name, industry, phone } = req.body || {};

  if (!email || !name || !industry || !phone) {
    return res.status(400).json({
      error: 'Missing required fields',
      required: ['email', 'name', 'industry', 'phone'],
    });
  }

  const { data, error } = await supabase
    .from('demo_requests')
    .insert({ email, name, industry, phone })
    .select()
    .single();

  if (error) {
    const status = error.code === '23505' ? 409 : 500;
    return res.status(status).json({ error: error.message, code: error.code });
  }

  return res.status(201).json({ id: data.id, created_at: data.created_at });
});

