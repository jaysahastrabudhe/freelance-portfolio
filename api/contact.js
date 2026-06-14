import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const YELLOW = '#FFD60A'
const BG_DARK = '#0E0F11'
const BG_CARD = '#15171B'
const TEXT_MUTED = '#9CA3AF'

function notificationHtml({ name, email, projectType, budget, message }) {
  return `
    <div style="font-family: Inter, system-ui, sans-serif; max-width: 580px; margin: 0 auto; background: ${BG_DARK}; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08);">
      <div style="background: ${BG_CARD}; padding: 28px 32px; border-bottom: 1px solid rgba(255,255,255,0.08);">
        <div style="font-size: 22px; font-weight: 900; color: #fff; letter-spacing: -0.03em;">
          scrpt<span style="color:${YELLOW}">.</span>
        </div>
        <div style="font-size: 13px; color: ${TEXT_MUTED}; margin-top: 4px;">New enquiry via scrpt.in</div>
      </div>
      <div style="padding: 32px;">
        <h2 style="color: #fff; font-size: 18px; margin: 0 0 20px; font-weight: 700;">
          <span style="color:${YELLOW}">${name}</span> wants to work with you
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 11px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: ${TEXT_MUTED}; font-size: 13px; width: 110px; vertical-align: top;">Name</td>
            <td style="padding: 11px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #fff; font-size: 14px; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 11px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: ${TEXT_MUTED}; font-size: 13px; vertical-align: top;">Email</td>
            <td style="padding: 11px 0; border-bottom: 1px solid rgba(255,255,255,0.07); font-size: 14px;">
              <a href="mailto:${email}" style="color: ${YELLOW}; text-decoration: none; font-weight: 600;">${email}</a>
            </td>
          </tr>
          ${projectType ? `
          <tr>
            <td style="padding: 11px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: ${TEXT_MUTED}; font-size: 13px; vertical-align: top;">Project</td>
            <td style="padding: 11px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #fff; font-size: 14px;">${projectType}</td>
          </tr>` : ''}
          ${budget ? `
          <tr>
            <td style="padding: 11px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: ${TEXT_MUTED}; font-size: 13px; vertical-align: top;">Budget</td>
            <td style="padding: 11px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #fff; font-size: 14px;">${budget}</td>
          </tr>` : ''}
        </table>
        <p style="color: ${TEXT_MUTED}; font-size: 12px; margin: 0 0 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
        <div style="background: ${BG_CARD}; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 18px 20px; color: #D1D5DB; font-size: 14px; line-height: 1.8; white-space: pre-wrap;">${message}</div>
        <a href="mailto:${email}?subject=Re: Your enquiry via scrpt.in"
           style="display: inline-block; margin-top: 24px; background: ${YELLOW}; color: ${BG_DARK}; text-decoration: none; padding: 12px 28px; border-radius: 9999px; font-size: 14px; font-weight: 700;">
          Reply to ${name} →
        </a>
      </div>
      <div style="padding: 16px 32px; border-top: 1px solid rgba(255,255,255,0.07); text-align: center; font-size: 11px; color: ${TEXT_MUTED};">
        Submitted via scrpt.in · Reply-To: ${email}
      </div>
    </div>
  `
}

function confirmationHtml({ name, projectType }) {
  return `
    <div style="font-family: Inter, system-ui, sans-serif; max-width: 560px; margin: 0 auto; background: ${BG_DARK}; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08);">
      <div style="background: ${BG_CARD}; padding: 32px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.08);">
        <div style="font-size: 26px; font-weight: 900; color: #fff; letter-spacing: -0.03em;">
          scrpt<span style="color:${YELLOW}">.</span>
        </div>
        <div style="font-size: 13px; color: ${TEXT_MUTED}; margin-top: 6px;">Creatives Collective · Pune</div>
      </div>
      <div style="padding: 36px 32px;">
        <h2 style="color: #fff; font-size: 20px; margin: 0 0 12px; font-weight: 800;">
          Thanks, <span style="color:${YELLOW}">${name}</span>! We'll be in touch soon.
        </h2>
        <p style="color: ${TEXT_MUTED}; font-size: 15px; line-height: 1.7; margin: 0 0 28px;">
          We've received your message and will get back to you within <strong style="color: #fff;">24 hours</strong>.
          ${projectType ? ` Looking forward to discussing your <strong style="color: #fff;">${projectType}</strong> project.` : ''}
        </p>
        <div style="background: ${BG_CARD}; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 24px; margin-bottom: 28px;">
          <p style="font-size: 12px; font-weight: 700; color: ${TEXT_MUTED}; margin: 0 0 16px; text-transform: uppercase; letter-spacing: 0.08em;">What happens next</p>
          ${[
            ['1', 'We review your message and reply within 24 hours'],
            ['2', 'Quick 30-min discovery call to understand your goals'],
            ['3', 'Detailed proposal with timeline & pricing'],
            ['4', 'We kick off once scope is agreed'],
          ].map(([n, text]) => `
          <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px;">
            <span style="width: 22px; height: 22px; background: ${YELLOW}; border-radius: 50%; color: ${BG_DARK}; font-size: 11px; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; text-align: center; line-height: 22px;">${n}</span>
            <span style="color: #D1D5DB; font-size: 14px; line-height: 1.6; padding-top: 2px;">${text}</span>
          </div>`).join('')}
        </div>
        <p style="color: ${TEXT_MUTED}; font-size: 14px; margin: 0 0 6px;">Reach us directly:</p>
        <a href="mailto:info@scrpt.in" style="color: ${YELLOW}; font-size: 14px; font-weight: 700; text-decoration: none;">info@scrpt.in</a>
      </div>
      <div style="background: ${BG_CARD}; padding: 16px 32px; border-top: 1px solid rgba(255,255,255,0.07); text-align: center; font-size: 11px; color: ${TEXT_MUTED};">
        © ${new Date().getFullYear()} scrpt. · Pune, Maharashtra · scrpt.in
      </div>
    </div>
  `
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, budget, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required' })
  }

  try {
    await Promise.all([
      resend.emails.send({
        from: 'scrpt. Contact Form <info@scrpt.in>',
        to: ['jay@scrpt.in', 'priyanka@scrpt.in'],
        replyTo: email,
        subject: `New enquiry from ${name}${budget ? ` — ${budget}` : ''}`,
        html: notificationHtml({ name, email, budget, message }),
      }),
      resend.emails.send({
        from: 'scrpt. <info@scrpt.in>',
        to: [email],
        replyTo: 'info@scrpt.in',
        subject: `Got your message, ${name}!`,
        html: confirmationHtml({ name }),
      }),
    ])

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }
}
