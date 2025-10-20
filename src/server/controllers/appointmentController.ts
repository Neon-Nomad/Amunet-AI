// src/server/controllers/appointmentController.ts
import { Request, Response } from 'express';
import axios from 'axios';

export async function handleAppointmentBooked(req: Request, res: Response) {
  try {
    const { appointmentId, service, date } = req.body;

    console.log('🎉 Appointment booked:', appointmentId);

    // 1. Generate social media post using GPT
    const postContent = await generateSocialPost(service, date);

    // 2. Post to Facebook
    await postToFacebook(postContent);

    // 3. Trigger webhook for newsletter update
    await triggerNewsletterUpdate();

    res.json({ success: true, message: 'Appointment processed' });
  } catch (error) {
    console.error('❌ Error processing appointment:', error);
    res.status(500).json({ error: 'Failed to process appointment' });
  }
}

async function generateSocialPost(service: string, date: string): Promise<string> {
  // Call GPT to generate engaging post
  return `🎉 New ${service} appointment booked for ${date}! We're excited to serve you.`;
}

async function postToFacebook(content: string) {
  const url = `https://graph.facebook.com/v18.0/${process.env.VITE_FACEBOOK_PAGE_ID}/feed`;
  
  await axios.post(url, {
    message: content,
    access_token: process.env.VITE_FACEBOOK_ACCESS_TOKEN,
  });

  console.log('📱 Posted to Facebook');
}

async function triggerNewsletterUpdate() {
  // Trigger n8n webhook for newsletter
  console.log('📧 Newsletter update triggered');
}
