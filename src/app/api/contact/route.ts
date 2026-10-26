import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force this route to run on the Node.js runtime (nodemailer requires Node APIs).
export const runtime = 'nodejs';

type ContactPayload = {
    fullName?: string;
    title?: string;
    organization?: string;
    email?: string;
    phone?: string;
    channel?: string;
    requirement?: string;
    urgency?: string;
    location?: string;
    details?: string;
};

const REQUIRED_FIELDS: Array<keyof ContactPayload> = [
    'fullName',
    'title',
    'organization',
    'email',
    'phone',
    'requirement',
    'urgency',
];

// Human-readable labels for the email body.
const FIELD_LABELS: Record<keyof ContactPayload, string> = {
    fullName: 'Full Name',
    title: 'Job Title',
    organization: 'Company / Venue',
    email: 'Email Address',
    phone: 'Phone Number',
    channel: 'Preferred Contact Method',
    requirement: 'Service Needed',
    urgency: 'When Do You Need Us',
    location: 'Location / Postcode',
    details: 'Extra Details',
};

function escapeHtml(value: string): string {
    const AMP = String.fromCharCode(38);
    return value
        .replace(/&/g, AMP + 'amp;')
        .replace(/</g, AMP + 'lt;')
        .replace(/>/g, AMP + 'gt;')
        .replace(/"/g, AMP + 'quot;')
        .replace(/'/g, AMP + '#39;');
}

export async function POST(request: Request) {
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const mailTo = process.env.CONTACT_RECEIVER || smtpUser;
    const mailFrom = process.env.CONTACT_SENDER || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !mailTo) {
        return NextResponse.json(
            {
                ok: false,
                error:
                    'Email service is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (and optionally CONTACT_RECEIVER, CONTACT_SENDER) in your environment.',
            },
            { status: 500 }
        );
    }

    let payload: ContactPayload;
    try {
        payload = (await request.json()) as ContactPayload;
    } catch {
        return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
    }

    // Basic server-side validation.
    const missing = REQUIRED_FIELDS.filter((field) => {
        const value = payload[field];
        return typeof value !== 'string' || value.trim() === '';
    });

    if (missing.length > 0) {
        return NextResponse.json(
            { ok: false, error: `Missing required fields: ${missing.join(', ')}.` },
            { status: 400 }
        );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email!.trim())) {
        return NextResponse.json({ ok: false, error: 'Please provide a valid email address.' }, { status: 400 });
    }

    const submittedAt = new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' });

    // Plain-text body.
    const textBody = (Object.keys(FIELD_LABELS) as Array<keyof ContactPayload>)
        .map((key) => `${FIELD_LABELS[key]}: ${payload[key]?.toString().trim() || '-'}`)
        .join('\n')
        .concat(`\n\nSubmitted: ${submittedAt} (London time)`);

    // Branded HTML body.
    const htmlRows = (Object.keys(FIELD_LABELS) as Array<keyof ContactPayload>)
        .map((key) => {
            const value = payload[key]?.toString().trim() || '-';
            return `<tr><td style="padding:8px 12px;border:1px solid #e5e5e5;background:#fafafa;font-weight:600;white-space:nowrap;">${escapeHtml(
                FIELD_LABELS[key]
            )}</td><td style="padding:8px 12px;border:1px solid #e5e5e5;">${escapeHtml(value).replace(/\n/g, '<br/>')}</td></tr>`;
        })
        .join('');

    const htmlBody = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;color:#111;">
      <div style="background:#0A0A0C;padding:20px 24px;border-bottom:3px solid #D4AF37;">
        <h2 style="margin:0;color:#D4AF37;font-size:18px;letter-spacing:1px;">KRSK SECURITY SERVICES</h2>
        <p style="margin:4px 0 0;color:#ccc;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Confidential Operational Request</p>
      </div>
      <div style="padding:24px;">
        <p style="font-size:14px;color:#333;">A new confidential enquiry has been submitted through the website contact form.</p>
        <table style="border-collapse:collapse;width:100%;font-size:13px;">${htmlRows}</table>
        <p style="margin-top:20px;font-size:12px;color:#888;">Submitted: ${escapeHtml(submittedAt)} (London time)</p>
      </div>
    </div>
  `;

    try {
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465, // true for 465 (SSL), false for 587/25 (STARTTLS)
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        await transporter.sendMail({
            from: `"KRSK Website" <${mailFrom}>`,
            to: mailTo,
            replyTo: `"${payload.fullName}" <${payload.email}>`,
            subject: `New Confidential Enquiry — ${payload.requirement} (${payload.urgency})`,
            text: textBody,
            html: htmlBody,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('Contact form email failed:', error);
        return NextResponse.json(
            { ok: false, error: 'Unable to send your message right now. Please call us directly on +44 7466 463048.' },
            { status: 502 }
        );
    }
}
