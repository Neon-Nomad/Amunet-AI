# Amunet AI - N8N Setup Instructions

## Your System
- Phone: +18665893454
- Stack: n8n + GPT + Google + Twilio + Facebook

## Step 1: Environment Variables
Create `.env.local`:
```
VITE_TWILIO_ACCOUNT_SID=your_sid
VITE_TWILIO_AUTH_TOKEN=your_token
VITE_TWILIO_PHONE_NUMBER=+18665893454
VITE_OPENAI_API_KEY=sk-proj-xxxxx
VITE_GOOGLE_CALENDAR_ID=primary
VITE_GOOGLE_SHEETS_ID=your_sheet_id
VITE_FACEBOOK_PAGE_ID=your_page_id
VITE_FACEBOOK_ACCESS_TOKEN=your_token
```

## Step 2: Create 4 N8N Workflows

### Workflow 1: Main Agent System
- Trigger: Webhook (/incoming-call)
- Nodes: Webhook → AI Agent → Google Calendar → Twilio SMS → Google Sheets

### Workflow 2: SMS Reminders  
- Trigger: Schedule (Daily 9 AM)
- Nodes: Schedule → Google Calendar → Loop → Twilio SMS

### Workflow 3: Social Posting
- Trigger: Webhook (/appointment-booked)
- Nodes: Webhook → AI Agent → Facebook Graph API

### Workflow 4: Monthly Newsletter
- Trigger: Schedule (1st of month 9 AM)
- Nodes: Schedule → Google Sheets → AI Agent → Gmail

## Step 3: Connect Credentials
- Google (Calendar, Sheets, Gmail)
- Twilio
- OpenAI
- Facebook

## Step 4: Test
1. Call +18665893454
2. Book appointment
3. Check Google Calendar
4. Check SMS
5. Check Google Sheets
6. Check Facebook

## Step 5: Launch
- Get first customer
- Price at $299-$599/month
- Scale!
