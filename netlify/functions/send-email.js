const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY)

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  let body
  try {
    body = JSON.parse(event.body)
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' }
  }

  const { name, email, phone, subject, message } = body

  if (!name || !email || !message) {
    return { statusCode: 400, body: 'Missing required fields' }
  }

  try {
    // Notification to support@
    await resend.emails.send({
      from: 'Te Manawa o Cambridge <support@temanawaocambridge.org.nz>',
      to: 'raylene@temanawaocambridge.org.nz',
      cc: ['inbox@temanawaocambridge.org.nz'],
      replyTo: email,
      subject: `New website enquiry — ${subject || 'General'} from ${name}`,
      text: `
Kia ora,

You've got a new message from the Te Manawa o Cambridge website.

${name} got in touch about: ${subject || 'General enquiry'}

Here's what they said:
"${message}"

You can reach them at:
📧 ${email}
📞 ${phone || 'No phone provided'}

Just hit reply to respond directly to ${name}.

Ngā mihi,
Te Manawa o Cambridge Website
      `.trim(),
    })

    // Auto-reply to sender
    await resend.emails.send({
      from: 'Te Manawa o Cambridge <support@temanawaocambridge.org.nz>',
      to: email,
      replyTo: 'raylene@temanawaocambridge.org.nz',
      subject: `Kia ora ${name} — we've received your message`,
      text: `
Kia ora ${name},

Thank you for getting in touch with Te Manawa o Cambridge — we've received your message and will get back to you as soon as we can.

If it's urgent, you can also reach us on Facebook:
➜ facebook.com/temanawaocambridge
➜ facebook.com/martinreuben

Ngā mihi,
Raylene & the Te Manawa o Cambridge team
      `.trim(),
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    }
  }
}
