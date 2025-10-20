// src/server/controllers/reminderController.ts
import { Request, Response } from 'express';
import { google } from 'googleapis';
import twilio from 'twilio';

const calendar = google.calendar('v3');
const twilioClient = twilio(
  process.env.VITE_TWILIO_ACCOUNT_SID,
  process.env.VITE_TWILIO_AUTH_TOKEN
);

export async function handleSMSReminder(req: Request, res: Response) {
  try {
    // 1. Get tomorrow's appointments from Google Calendar
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const events = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date(tomorrow.setHours(0, 0, 0, 0)).toISOString(),
      timeMax: new Date(tomorrow.setHours(23, 59, 59, 999)).toISOString(),
    });

    console.log(`📅 Found ${events.data.items?.length || 0} appointments for tomorrow`);

    // 2. Send SMS reminders for each appointment
    for (const event of events.data.items || []) {
      const attendee = event.attendees?.[0];
      if (attendee?.email) {
        const message = `Reminder: You have "${event.summary}" tomorrow at ${event.start?.dateTime}. Reply YES to confirm.`;
        
        await twilioClient.messages.create({
          body: message,
          from: process.env.VITE_TWILIO_PHONE_NUMBER,
          to: attendee.email, // In real scenario, extract phone number
        });

        console.log(`📱 Reminder sent for: ${event.summary}`);
      }
    }

    res.json({ success: true, remindersSent: events.data.items?.length || 0 });
  } catch (error) {
    console.error('❌ Error sending reminders:', error);
    res.status(500).json({ error: 'Failed to send reminders' });
  }
}
