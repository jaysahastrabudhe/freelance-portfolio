import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, projectType, budget, message } = req.body

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required' })
  }

  try {
    await resend.emails.send({
      from: 'Scrpt Contact Form <onboarding@resend.dev>',
      to: ['hello@jaysahastrabudhe.dev'],
      replyTo: email,
      subject: `New enquiry from ${name}${projectType ? ` — ${projectType}` : ''}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
          <h2 style="color: #111827; font-size: 20px; margin: 0 0 24px;">New Contact Form Submission</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 13px; width: 130px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #111827; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #4F46E5; font-size: 14px;">
                <a href="mailto:${email}" style="color: #4F46E5;">${email}</a>
              </td>
            </tr>
            ${projectType ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 13px;">Project Type</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #111827; font-size: 14px;">${projectType}</td>
            </tr>` : ''}
            ${budget ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 13px;">Budget</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #111827; font-size: 14px;">${budget}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #6B7280; font-size: 13px; margin: 0 0 8px;">Message</p>
            <div style="background: #fff; border: 1px solid #E5E7EB; border-radius: 8px; padding: 16px; color: #374151; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
          </div>

          <p style="margin-top: 28px; font-size: 12px; color: #9CA3AF; text-align: center;">
            Sent via scrpt.dev contact form · Reply-To is set to ${email}
          </p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }
}
