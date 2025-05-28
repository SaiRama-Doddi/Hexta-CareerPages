// src/app/careers/[jobid]/page.tsx

import Link from 'next/link'
import { jobData } from '../../../../lib/mockData'

export default function JobDetail({ params }: { params: { jobid: string } }) {
  const job = jobData.find(j => j.id === params.jobid)
  if (!job) return <div>Job not found</div>

  return (
    <div>
      <h1>{job.title}</h1>
      <p><b>Department:</b> {job.department}</p>
      <p><b>Type:</b> {job.type}</p>
      <p><b>Experience:</b> {job.experience}</p>
      <p><b>Salary:</b> {job.salary}</p>
      <p><b>Posted:</b> {job.postedDate.toDateString()}</p>
      <p>{job.description}</p>

      <h3>Requirements</h3>
      <ul>{job.requirements.map((r, i) => <li key={i}>{r}</li>)}</ul>

      <h3>Responsibilities</h3>
      <ul>{job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}</ul>

      {job.benefits && (
        <>
          <h3>Benefits</h3>
          <ul>{job.benefits.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </>
      )}

      <Link href={`/careers/apply/${job.id}`}>
        <button>Apply Now</button>
      </Link>
    </div>
  )
}
