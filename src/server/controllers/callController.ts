// src/server/controllers/callController.ts
import { Request, Response } from 'express';
import { OpenAI } from 'openai';
import { google } from 'googleapis';
import twilio from 'twilio';

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});

const calendar = google.calendar({
  version: 'v3',
  auth: process.env.VITE_GOOGLE_CALENDAR_ID,
});

const twilioClient = twilio(
  process.env.VITE_TWILIO_ACCOUNT_SID,
  process.env.VITE_TWILIO_AUTH_TOKEN
);

export async function handleIncomingCall(req: Request, res: Response) {
  try {
    const { From, Body } = req.body; // Phone number and transcribed message

    console.log(`📞 Incoming call from: ${From}`);
    console.log(`💬 Message: ${Body}`);

    // 1. Use GPT to understand the intent
    const gptResponse = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a professional AI receptionist. Extract caller information and booking details. Return JSON with: name, phone, service, preferred_date, preferred_time.',
        },
        {
          role: 'user',
          content: `Caller said: "${Body}"`,
        },
      ],
      temperature: 0.7,
    });

    const callerInfo = JSON.parse(gptResponse.choices[0].message.content || '{}');
    console.log('🤖 Extracted info:', callerInfo);

    // 2. Create appointment in Google Calendar
    const event = {
      summary: `${callerInfo.service || 'Appointment'} - ${callerInfo.name}`,
      description: `Caller: ${callerInfo.name}\nPhone: ${From}`,
      start: {
        dateTime: new Date(`${callerInfo.preferred_date} ${callerInfo.preferred_time}`).toISOString(),
      },
      end: {
        dateTime: new Date(new Date(`${callerInfo.preferred_date} ${callerInfo.preferred_time}`).getTime() + 3600000).toISOString(),
      },
      attendees: [{ email: callerInfo.email || 'noreply@amunet.ai' }],
    };

    const appointment = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
    });

    console.log('📅 Appointment created:', appointment.data.id);

    // 3. Send SMS confirmation
    await twilioClient.messages.create({
      body: `Appointment confirmed! ${callerInfo.service} on ${callerInfo.preferred_date} at ${callerInfo.preferred_time}. Reply CONFIRM to confirm or CANCEL to cancel.`,
      from: process.env.VITE_TWILIO_PHONE_NUMBER,
      to: From,
    });

    console.log('📱 SMS sent to:', From);

    // 4. Log to Google Sheets
    await logToSheets({
      name: callerInfo.name,
      phone: From,
      service: callerInfo.service,
      date: new Date().toISOString(),
      status: 'Booked',
    });

    res.json({ success: true, appointmentId: appointment.data.id });
  } catch (error) {
    console.error('❌ Error handling call:', error);
    res.status(500).json({ error: 'Failed to process call' });
  }
}

async function logToSheets(data: any) {
  // Implementation for Google Sheets logging
  console.log('📊 Logging to sheets:', data);
}
