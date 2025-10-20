// src/server/utils/helpers.ts
import { google } from 'googleapis';

const sheets = google.sheets('v4');

export async function appendToSheet(
  spreadsheetId: string,
  range: string,
  values: any[][]
) {
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    console.log('✅ Data appended to sheet');
    return response.data;
  } catch (error) {
    console.error('❌ Error appending to sheet:', error);
    throw error;
  }
}

export async function generateNewsletter(lastMonthData: any[]): Promise<string> {
  const total = lastMonthData.length;
  const booked = lastMonthData.filter((d) => d.status === 'Booked').length;
  const html = `
    <h2>Monthly Report</h2>
    <p>Total inquiries: ${total}</p>
    <p>Appointments booked: ${booked}</p>
    <p>Booking rate: ${((booked / total) * 100).toFixed(1)}%</p>
  `;
  return html;
}
