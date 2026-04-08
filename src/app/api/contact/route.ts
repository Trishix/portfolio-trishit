import { NextResponse } from 'next/server'

type ContactPayload = {
  name?: string
  email?: string
  message?: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload
    const name = body?.name?.trim()
    const email = body?.email?.trim()
    const message = body?.message?.trim()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    const renderWebhookUrl = process.env.RENDER_MAIL_WEBHOOK_URL

    if (!renderWebhookUrl) {
      return NextResponse.json(
        { error: 'Render mail service is not configured. Set RENDER_MAIL_WEBHOOK_URL.' },
        { status: 500 }
      )
    }

    const response = await fetch(renderWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.RENDER_MAIL_API_KEY
          ? { Authorization: `Bearer ${process.env.RENDER_MAIL_API_KEY}` }
          : {}),
      },
      body: JSON.stringify({
        to: process.env.CONTACT_RECEIVER_EMAIL || 'contact@trishit.com',
        subject: `Portfolio contact from ${name}`,
        name,
        email,
        message,
      }),
      cache: 'no-store',
    })

    if (!response.ok) {
      const text = await response.text()
      return NextResponse.json({ error: text || 'Render mail request failed.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Failed to process your request.' }, { status: 500 })
  }
}
