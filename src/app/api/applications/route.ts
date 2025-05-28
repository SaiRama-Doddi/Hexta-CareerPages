import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { jobId, name, email, phone, resume, coverLetter } = body

    if (!jobId || !name || !email || !phone || !resume || !coverLetter) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const newApplication = await prisma.jobApplication.create({
      data: {
        jobId,
        name,
        email,
        phone,
        resume,
        coverLetter,
      },
    })

    return NextResponse.json(newApplication, { status: 201 })
  } catch (error: any) {
    console.error('POST ERROR:', error)
    return NextResponse.json({ error: error.message || 'Server Error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const applications = await prisma.jobApplication.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return NextResponse.json(applications)
  } catch (error: any) {
    console.error('GET ERROR:', error)
    return NextResponse.json({ error: error.message || 'Server Error' }, { status: 500 })
  }
}
