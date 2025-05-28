// app/careers/page.tsx
import Link from 'next/link';
import { jobData } from '../../../lib/mockData';

export default function CareersPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Job Openings</h1>
      <ul className="space-y-4">
        {jobData.map((job) => (
          <li key={job.id} className="border p-4 rounded shadow hover:shadow-lg transition-shadow duration-200">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p>{job.department} - {job.location}</p>
            <p>{job.type} | {job.experience}</p>
            {job.salary && (
              <p className="text-sm text-gray-600">{job.salary} | Posted on {new Date(job.postedDate).toLocaleDateString()}</p>
            )}
            <div className="mt-2 flex gap-4">
              <Link href={`/careers/${job.id}`}>
                <button className="text-blue-600 underline">View Details</button>
              </Link>
              <Link href={`/careers/apply/${job.id}`}>
                <button className="text-green-600 underline">Apply Now</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
