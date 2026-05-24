import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// ── Email templates ────────────────────────────────────────────────────────────

function notificationHtml({ name, email, projectType, budget, message }) {
  return `
    <div style="font-family: Inter, sans-serif; max-width: 580px; margin: 0 auto; background: #f9fafb; border-radius: 12px; overflow: hidden;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #4F46E5, #06B6D4); padding: 28px 32px;">
        <div style="font-size: 22px; font-weight: 800; color: #fff; letter-spacing: -0.02em;">Scrpt</div>
        <div style="font-size: 13px; color: rgba(255,255,255,0.75); margin-top: 4px;">New contact form submission</div>
      </div>
      <!-- Body -->
      <div style="padding: 32px;">
        <h2 style="color: #111827; font-size: 18px; margin: 0 0 20px; font-weight: 700;">
          ${name} wants to work with you
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 11px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 13px; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 11px 0; border-bottom: 1px solid #E5E7EB; color: #111827; font-size: 14px; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 11px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 13px; vertical-align: top;">Email</td>
            <td style="padding: 11px 0; border-bottom: 1px solid #E5E7EB; font-size: 14px;">
              <a href="mailto:${email}" style="color: #4F46E5; text-decoration: none;">${email}</a>
            </td>
          </tr>
          ${projectType ? `
          <tr>
            <td style="padding: 11px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 13px; vertical-align: top;">Project</td>
            <td style="padding: 11px 0; border-bottom: 1px solid #E5E7EB; color: #111827; font-size: 14px;">${projectType}</td>
          </tr>` : ''}
          ${budget ? `
          <tr>
            <td style="padding: 11px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 13px; vertical-align: top;">Budget</td>
            <td style="padding: 11px 0; border-bottom: 1px solid #E5E7EB; color: #111827; font-size: 14px;">${budget}</td>
          </tr>` : ''}
        </table>
        <p style="color: #6B7280; font-size: 13px; margin: 0 0 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
        <div style="background: #fff; border: 1px solid #E5E7EB; border-radius: 8px; padding: 18px 20px; color: #374151; font-size: 14px; line-height: 1.75; white-space: pre-wrap;">${message}</div>

        <a href="mailto:${email}?subject=Re: Your enquiry via Scrpt" style="display: inline-block; margin-top: 24px; background: linear-gradient(135deg, #4F46E5, #06B6D4); color: #fff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-size: 14px; font-weight: 700;">
          Reply to ${name} →
        </a>
      </div>
      <div style="padding: 16px 32px; border-top: 1px solid #E5E7EB; text-align: center; font-size: 11px; color: #9CA3AF;">
        Submitted via scrpt.in · Reply-To: ${email}
      </div>
    </div>
  `
}

function confirmationHtml({ name, projectType, budget }) {
  return `
    <div style="font-family: Inter, sans-serif; max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #E5E7EB;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #4F46E5, #06B6D4); padding: 32px; text-align: center;">
        <div style="font-size: 26px; font-weight: 800; color: #fff; letter-spacing: -0.02em;">Scrpt</div>
        <div style="font-size: 13px; color: rgba(255,255,255,0.8); margin-top: 6px;">Web Development Studio · Pune</div>
      </div>
      <!-- Body -->
      <div style="padding: 36px 32px;">
        <h2 style="color: #111827; font-size: 20px; margin: 0 0 12px; font-weight: 800;">
          Thanks, ${name}! I'll be in touch soon.
        </h2>
        <p style="color: #6B7280; font-size: 15px; line-height: 1.7; margin: 0 0 24px;">
          I've received your message and will get back to you within <strong style="color: #111827;">24 hours</strong>.
          ${projectType ? ` Looking forward to discussing your <strong style="color: #111827;">${projectType}</strong> project.` : ''}
        </p>

        <!-- What happens next -->
        <div style="background: #F9FAFB; border-radius: 10px; padding: 24px; margin-bottom: 28px;">
          <p style="font-size: 13px; font-weight: 700; color: #374151; margin: 0 0 16px; text-transform: uppercase; letter-spacing: 0.08em;">What happens next</p>
          ${[
            ['1', 'I\'ll review your message and reply within 24 hours'],
            ['2', 'We\'ll jump on a quick 30-min discovery call'],
            ['3', 'I\'ll send a detailed proposal with timeline & pricing'],
            ['4', 'We kick off once scope is agreed'],
          ].map(([n, text]) => `
          <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px;">
            <span style="width: 22px; height: 22px; background: linear-gradient(135deg, #4F46E5, #06B6D4); border-radius: 50%; color: #fff; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; line-height: 22px; text-align: center;">${n}</span>
            <span style="color: #4B5563; font-size: 14px; line-height: 1.5; padding-top: 2px;">${text}</span>
          </div>`).join('')}
        </div>

        <p style="color: #6B7280; font-size: 14px; margin: 0 0 6px;">Need to reach me directly?</p>
        <a href="mailto:jay@scrpt.in" style="color: #4F46E5; font-size: 14px; font-weight: 600; text-decoration: none;">jay@scrpt.in</a>
        &nbsp;&nbsp;·&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/jaysahastrabudhe/" style="color: #4F46E5; font-size: 14px; font-weight: 600; text-decoration: none;">LinkedIn</a>
      </div>
      <div style="background: #F9FAFB; padding: 16px 32px; border-top: 1px solid #E5E7EB; text-align: center; font-size: 11px; color: #9CA3AF;">
        © ${new Date().getFullYear()} Scrpt · Pune, Maharashtra · scrpt.in
      </div>
    </div>
  `
}

// ── Handler ────────────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, projectType, budget, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required' })
  }

  try {
    // Send both emails in parallel
    await Promise.all([
      // 1 ── Notification to Jay (cc Gmail)
      resend.emails.send({
        from: 'Scrpt Contact Form <jay@scrpt.in>',
        to: ['jay@scrpt.in'],
        cc: ['jaysahastrabudhe@gmail.com'],
        replyTo: email,
        subject: `New enquiry from ${name}${projectType ? ` — ${projectType}` : ''}`,
        html: notificationHtml({ name, email, projectType, budget, message }),
      }),

      // 2 ── Confirmation to the person who filled the form
      resend.emails.send({
        from: 'Jay @ Scrpt <jay@scrpt.in>',
        to: [email],
        replyTo: 'jay@scrpt.in',
        subject: `Got your message, ${name}!`,
        html: confirmationHtml({ name, projectType, budget }),
      }),
    ])

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }
}
