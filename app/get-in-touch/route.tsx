import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

const sql = neon(process.env.DATABASE_URL!);

export async function POST(req: Request) {
  try {
    const { phone_number } = await req.json();

    if (!phone_number || !/^\+?\d{7,15}$/.test(phone_number)) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 });
    }

    const rows = await sql`
      INSERT INTO get_in_touch_requests (phone_number)
      VALUES (${phone_number})
      RETURNING id, created_at
    `;

    return NextResponse.json({
      success: true,
      id: rows[0].id,
      created_at: rows[0].created_at,
    });
  } catch (error) {
    console.error('Error saving phone number:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
