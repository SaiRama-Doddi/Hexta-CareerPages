import { NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prisma';
// ✅ Ensure this alias works or use relative path

// POST: Create a new job
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      id,
      title,
      department,
      location,
      type,
      experience,
      salary,
      postedDate,
      description,
      requirements,
      responsibilities,
      benefits,
    } = body;

    // Basic validation
    if (!id || !title || !department || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const job = await prisma.job.create({
      data: {
        id,
        title,
        department,
        location,
        type,
        experience,
        salary,
        postedDate: new Date(postedDate),
        description,
        requirements,
        responsibilities,
        benefits,
      },
    });

    return NextResponse.json(job, { status: 201 });
  } catch (error: any) {
    console.error('Job POST ERROR:', error);
    return NextResponse.json(
      { error: error?.message || 'Server Error' },
      { status: 500 }
    );
  }
}

// GET: Retrieve one or all jobs
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      const job = await prisma.job.findUnique({
        where: { id },
      });

      if (!job) {
        return NextResponse.json({ error: 'Job not found' }, { status: 404 });
      }

      return NextResponse.json(job, { status: 200 });
    }

    const jobs = await prisma.job.findMany();
    return NextResponse.json(jobs, { status: 200 });
  } catch (error: any) {
    console.error('Job GET ERROR:', error);
    return NextResponse.json(
      { error: error?.message || 'Server Error' },
      { status: 500 }
    );
  }
}
