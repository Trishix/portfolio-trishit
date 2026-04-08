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

    const resendApiKey = process.env.RESEND_API_KEY
    const resendFromEmail = process.env.RESEND_EMAIL
    const supportEmail = process.env.SUPPORT_EMAIL || process.env.CONTACT_RECEIVER_EMAIL

    if (!resendApiKey || !resendFromEmail || !supportEmail) {
      return NextResponse.json(
        {
          error:
            'Resend mail service is not configured. Set RESEND_API_KEY, RESEND_EMAIL, and SUPPORT_EMAIL.',
        },
        { status: 500 }
      )
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: resendFromEmail,
        to: [supportEmail],
        subject: `Portfolio contact from ${name}`,
        reply_to: email,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
      cache: 'no-store',
    })

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { message?: string } | null
      return NextResponse.json({ error: data?.message || 'Resend mail request failed.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Failed to process your request.' }, { status: 500 })
  }
}
