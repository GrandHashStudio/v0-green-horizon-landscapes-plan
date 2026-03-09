import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  fullName: string
  email: string
  phone?: string
  propertyType: string
  projectInterests: string[]
  preferredContact: string
  message?: string
}

// In-memory storage for leads (in production, use a database)
const leads: (ContactFormData & { submittedAt: string; id: string })[] = []

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.fullName || data.fullName.length < 2) {
      return NextResponse.json(
        { error: 'Full name is required (minimum 2 characters)' },
        { status: 400 }
      )
    }

    if (!data.email || !isValidEmail(data.email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    if (!data.propertyType) {
      return NextResponse.json(
        { error: 'Property type is required' },
        { status: 400 }
      )
    }

    if (!data.preferredContact) {
      return NextResponse.json(
        { error: 'Preferred contact method is required' },
        { status: 400 }
      )
    }

    // Store the lead
    const lead = {
      ...data,
      id: generateId(),
      submittedAt: new Date().toISOString(),
    }
    leads.push(lead)

    // Send email notification via Resend (if configured)
    if (process.env.RESEND_API_KEY) {
      try {
        await sendEmailNotification(lead)
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError)
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Consultation request received. We will be in touch within 24 hours.',
        leadId: lead.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // Simple endpoint to check leads (would be protected in production)
  return NextResponse.json({
    totalLeads: leads.length,
    recentLeads: leads.slice(-5).map((l) => ({
      id: l.id,
      name: l.fullName,
      email: l.email,
      submittedAt: l.submittedAt,
    })),
  })
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function generateId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

async function sendEmailNotification(
  lead: ContactFormData & { submittedAt: string; id: string }
) {
  const projectInterests = lead.projectInterests.length
    ? lead.projectInterests
        .map((i) => {
          switch (i) {
            case 'xeriscaping':
              return 'Sustainable Xeriscaping'
            case 'irrigation':
              return 'Smart Irrigation'
            case 'native-plants':
              return 'Native Plant Gardens'
            default:
              return i
          }
        })
        .join(', ')
    : 'Not specified'

  const emailHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #637a4a;">New Consultation Request</h2>
      <p>A new consultation request has been submitted through the website.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #e8eaed; font-weight: bold;">Name</td>
          <td style="padding: 10px; border-bottom: 1px solid #e8eaed;">${lead.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #e8eaed; font-weight: bold;">Email</td>
          <td style="padding: 10px; border-bottom: 1px solid #e8eaed;">${lead.email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #e8eaed; font-weight: bold;">Phone</td>
          <td style="padding: 10px; border-bottom: 1px solid #e8eaed;">${lead.phone || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #e8eaed; font-weight: bold;">Property Type</td>
          <td style="padding: 10px; border-bottom: 1px solid #e8eaed;">${lead.propertyType}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #e8eaed; font-weight: bold;">Interests</td>
          <td style="padding: 10px; border-bottom: 1px solid #e8eaed;">${projectInterests}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #e8eaed; font-weight: bold;">Preferred Contact</td>
          <td style="padding: 10px; border-bottom: 1px solid #e8eaed;">${lead.preferredContact}</td>
        </tr>
      </table>
      
      ${
        lead.message
          ? `
        <h3 style="color: #3c4043;">Message</h3>
        <p style="background: #f8f9fa; padding: 15px; border-radius: 8px;">${lead.message}</p>
      `
          : ''
      }
      
      <p style="color: #9aa0a6; font-size: 12px; margin-top: 30px;">
        Lead ID: ${lead.id}<br>
        Submitted: ${new Date(lead.submittedAt).toLocaleString()}
      </p>
    </div>
  `

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'GreenHorizon <notifications@greenhorizonlandscapes.com>',
      to: ['elias@greenhorizonlandscapes.com'],
      subject: `New Consultation Request from ${lead.fullName}`,
      html: emailHtml,
    }),
  })

  if (!response.ok) {
    throw new Error(`Resend API error: ${response.status}`)
  }
}
