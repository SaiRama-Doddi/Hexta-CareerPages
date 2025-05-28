// src/app/api/applications/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const jobId = formData.get('jobId');
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const resume = formData.get('resume'); // File
    const coverLetter = formData.get('coverLetter');

    return NextResponse.json({
      message: 'Form submitted successfully!',
      jobId,
      name,
      email,
      phone,
      resume: resume instanceof File ? resume.name : null,
      coverLetter
    });
  } catch (error) {
    return NextResponse.json({ error: 'POST Failed' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'GET is working' });
}
