/* import { NextResponse } from 'next/server';
import { jobData } from '../../../../../lib/mockData';


export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const job = jobData.find((job) => job.id === params.id);

  if (!job) {
    return NextResponse.json({ error: 'Job not found' }, { status: 404 });
  }

  return NextResponse.json(job);
}
 */