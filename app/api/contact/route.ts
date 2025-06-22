// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { MongoClient } from 'mongodb'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  // ✅ Store in MongoDB
  const uri = process.env.MONGODB_URI!
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const db = client.db('studio-parsa')
    const collection = db.collection('messages')
    await collection.insertOne({ name, email, message, date: new Date() })
  } finally {
    await client.close()
  }

  // ✅ Send email using nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  })

  await transporter.sendMail({
    from: `"Studio PARSA" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER!,
    subject: 'New Contact Form Submission',
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br/>${message}</p>`,
  })

  return NextResponse.json({ success: true })
}
