'use client';

import { useEffect, useState } from 'react';
import { JobListing } from '../../types/job';
import CareerSearch from './Searchbar';
import JobCard from './JobCard';
import VectorImage from './VectorImage';

const JobBoard = () => {
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('/api/jobs/create');
        const data = await res.json();
        setJobs(data);
        setFilteredJobs(data);
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleFiltersChange = (filters: {
    searchTerm: string;
    location: string;
    department: string;
    jobTypes: string[];
    experience: string;
  }) => {
    const lowerSearch = filters.searchTerm.toLowerCase();

    const results = jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(lowerSearch) ||
        job.department.toLowerCase().includes(lowerSearch) ||
        job.location.toLowerCase().includes(lowerSearch);

      const matchesLocation = !filters.location || job.location.toLowerCase() === filters.location.toLowerCase();
      const matchesDepartment = !filters.department || job.department === filters.department;
      const matchesType = filters.jobTypes.length === 0 || filters.jobTypes.includes(job.type);
      const matchesExperience = !filters.experience || job.experience === filters.experience;

      return matchesSearch && matchesLocation && matchesDepartment && matchesType && matchesExperience;
    });

    setFilteredJobs(results);
  };

  return (
    <div className="mt-35">
      <CareerSearch onFiltersChange={handleFiltersChange} />
      <VectorImage />
      <JobCard jobs={filteredJobs} loading={loading} />
    </div>
  );
};

export default JobBoard;
