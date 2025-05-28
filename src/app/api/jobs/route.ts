// app/api/jobs/route.ts

import { NextResponse } from 'next/server';
import { jobData } from '../../../../lib/mockData';

export function GET() {
  return NextResponse.json(jobData);
}
