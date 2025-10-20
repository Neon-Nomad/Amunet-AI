// src/server/api/routes.ts
import express, { Router, Request, Response } from 'express';
import { handleIncomingCall } from '../controllers/callController';
import { handleAppointmentBooked } from '../controllers/appointmentController';
import { handleSMSReminder } from '../controllers/reminderController';

const router = Router();

// Webhook: Incoming call from Twilio
router.post('/api/webhooks/incoming-call', handleIncomingCall);

// Webhook: Appointment booked
router.post('/api/webhooks/appointment-booked', handleAppointmentBooked);

// Webhook: SMS reminder trigger
router.post('/api/webhooks/sms-reminder', handleSMSReminder);

// Health check
router.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default router;
