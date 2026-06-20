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

  const {
    fullName, dob, address,
    contactMethod, contactTime,
    supportTypes,
    situation,
    referredBy, referredByOther,
    emergencyName, emergencyPhone,
  } = body

  if (!fullName || !address || !situation) {
    return { statusCode: 400, body: 'Missing required fields' }
  }

  const supportList = Array.isArray(supportTypes) && supportTypes.length
    ? supportTypes.join(', ')
    : 'Not specified'

  const referralSource = referredBy === 'Other' && referredByOther
    ? `Other — ${referredByOther}`
    : referredBy || 'Not specified'

  try {
    await resend.emails.send({
      from: 'Te Manawa o Cambridge <support@temanawaocambridge.org.nz>',
      to: 'raylene@temanawaocambridge.org.nz',
      cc: ['inbox@temanawaocambridge.org.nz'],
      subject: `New self-referral — ${fullName}`,
      text: `
Kia ora,

A new self-referral has been submitted through the Te Manawa o Cambridge website.

── PERSONAL DETAILS ──────────────────────────
Full name:    ${fullName}
Date of birth: ${dob || 'Not provided'}
Address:      ${address}

── CONTACT PREFERENCES ───────────────────────
Preferred contact method: ${contactMethod || 'Not specified'}
Preferred contact time:   ${contactTime || 'Not specified'}

── SUPPORT NEEDED ────────────────────────────
Type(s) of support: ${supportList}

Brief description:
${situation}

── REFERRAL SOURCE ───────────────────────────
Referred by: ${referralSource}

── EMERGENCY CONTACT ─────────────────────────
Name:  ${emergencyName || 'Not provided'}
Phone: ${emergencyPhone || 'Not provided'}

──────────────────────────────────────────────
This person has given consent for their information to be used to arrange support.

Ngā mihi,
Te Manawa o Cambridge Website
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
      body: JSON.stringify({ error: 'Failed to send referral' }),
    }
  }
}
