import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

const sql = neon(process.env.DATABASE_URL!);

export async function POST(req: Request) {
  try {
    const {
      full_name,
      email,
      phone,
      project_type,
      estimated_budget,
      timeline,
      message,
    } = await req.json();

    // Required field validation
    if (!full_name || !email || !project_type || !message) {
      return NextResponse.json({ error: 'Full name, email, project type, and message are required.' }, { status: 400 });
    }

    // Project type validation
    const validTypes = ['residential', 'commercial', 'interior', 'landscape'];
    if (!validTypes.includes(project_type)) {
      return NextResponse.json({ error: 'Invalid project type.' }, { status: 400 });
    }

    const rows = await sql`
      INSERT INTO start_project_requests (
        full_name, email, phone, project_type, estimated_budget, timeline, message
      )
      VALUES (
        ${full_name}, ${email}, ${phone || null}, ${project_type},
        ${estimated_budget || null}, ${timeline || null}, ${message}
      )
      RETURNING id, created_at
    `;

    return NextResponse.json({
      success: true,
      id: rows[0].id,
      created_at: rows[0].created_at,
    });
  } catch (error) {
    console.error('Error saving start project request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
