import { NextRequest, NextResponse } from 'next/server';

interface EnquiryPayload {
  fullName?: string;
  phone?: string;
  email?: string;
  configuration?: string;
  intent?: string;
  notes?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: EnquiryPayload = await req.json();

    const fullName = (body.fullName || '').trim();
    const phone = (body.phone || '').trim();
    const email = (body.email || '').trim();
    const configuration = (body.configuration || '3 BHK').trim();
    const intent = (body.intent || 'Get Price Sheet & Brochure').trim();

    if (fullName.length < 2) {
      return NextResponse.json(
        { error: 'Please enter your full name.' },
        { status: 400 }
      );
    }

    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      return NextResponse.json(
        { error: 'Please enter a valid 10-digit mobile number.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const referenceId = `MS-${Date.now().toString(36).toUpperCase().slice(-6)}`;

    return NextResponse.json(
      {
        success: true,
        referenceId,
        receivedAt: new Date().toISOString(),
        summary: {
          fullName,
          configuration,
          intent,
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Unable to process your enquiry right now. Please call +91-8926267958.' },
      { status: 500 }
    );
  }
}
