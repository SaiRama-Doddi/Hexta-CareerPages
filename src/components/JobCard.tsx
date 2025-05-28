'use client';

import Image from 'next/image';
import { format } from 'date-fns';
import { JobListing } from '../../types/job';

interface JobCardProps {
  jobs: JobListing[];
  loading: boolean;
}

const JobCard = ({ jobs, loading }: JobCardProps) => {
  return (
    <div className="w-full px-4 py-10 flex flex-col items-center">
      {loading ? (
        <p className="text-white text-center">Loading jobs...</p>
      ) : (
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="flex justify-center transition-transform duration-300 hover:scale-[1.02]">
              <div className="w-full max-w-md flex items-start bg-[#217597] rounded-md p-3 sm:p-4 gap-3 sm:gap-4 shadow-md hover:shadow-xl hover:bg-[#2a8aa9] transition-all duration-300">
                <div className="flex-shrink-0 bg-[#25252557] rounded-md p-1 sm:p-2 h-14 w-14 flex items-center justify-center">
                  <div className="text-white text-sm">👨‍💻</div>
                </div>
                <div className="flex flex-col text-white flex-1 text-sm leading-snug">
                  <h3 className="font-semibold text-[15px]">{job.title}</h3>
                  <p className="text-white/80 text-xs mt-0.5">
                    {job.department} · {job.location}
                  </p>
                  <div className="flex justify-between items-center mt-1.5">
                    <span className="text-[11px] bg-white text-[#217597] px-2 py-0.5 rounded-full">
                      {job.type}
                    </span>
                    <span className="text-[11px] text-white/70">
                      {format(new Date(job.postedDate), 'dd MMM yyyy')}
                    </span>
                  </div>
                  <p className="text-xs mt-2 line-clamp-1 text-white/90">{job.description}</p>
                  <button className="mt-2 text-xs font-medium text-white underline hover:text-blue-100 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobCard;
