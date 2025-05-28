'use client';

import { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiX } from 'react-icons/fi';
import { FaMapMarkerAlt } from 'react-icons/fa';

const departments = ['Engineering', 'Design', 'Marketing', 'Sales'];
const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];
const experienceLevels = ['0-1 years', '2-4 years', '5+ years'];

interface CareerSearchProps {
  onFiltersChange: (filters: {
    searchTerm: string;
    location: string;
    department: string;
    jobTypes: string[];
    experience: string;
  }) => void;
}

export default function CareerSearch({ onFiltersChange }: CareerSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState('');

  useEffect(() => {
    onFiltersChange({
      searchTerm,
      location,
      department: selectedDepartment,
      jobTypes: selectedJobTypes,
      experience: selectedExperience,
    });
  }, [searchTerm, location, selectedDepartment, selectedJobTypes, selectedExperience]);

  const toggleJobType = (type: string) => {
    setSelectedJobTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="w-full px-4 py-6 md:py-10 flex flex-col items-center mt-30">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold relative after:content-[''] after:block after:w-full after:h-1 after:bg-[#217597] after:mt-1">
            CAREERS
          </h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-3 border border-dashed border-[#217597] rounded-lg hover:bg-blue-50"
          >
            {showFilters ? <FiX className="text-[#217597] text-2xl" /> : <FiFilter className="text-[#217597] text-xl" />}
          </button>
        </div>

        {/* Search + Location Bar */}
        <div className="flex flex-row items-stretch w-full border border-[#217597] rounded-full overflow-hidden">
          <div className="flex items-center gap-2 px-2 py-2 md:px-4 md:py-3 flex-1 border-r border-[#217597]">
            <FiSearch className="text-[#217597] text-base md:text-xl" />
            <input
              type="text"
              placeholder="Search here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none bg-transparent text-sm md:text-base text-gray-700 placeholder-gray-400"
            />
          </div>

          <div className="flex items-center gap-2 px-2 py-2 md:px-4 md:py-3 flex-1">
            <FaMapMarkerAlt className="text-[#217597] text-sm md:text-lg" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full outline-none bg-transparent text-sm md:text-base text-gray-700"
            >
              <option value="">Select Location</option>
              <option value="New York">New York</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
        </div>

        {showFilters && (
          <div className="mt-6 p-4 border border-[#217597] rounded-lg bg-blue-50">
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Department</label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="border p-2 rounded w-full"
              >
                <option value="">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-semibold">Job Type</label>
              <div className="flex gap-4 flex-wrap">
                {jobTypes.map((type) => (
                  <label key={type} className="inline-flex items-center gap-1">
                    <input
                      type="checkbox"
                      checked={selectedJobTypes.includes(type)}
                      onChange={() => toggleJobType(type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-semibold">Experience Level</label>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="border p-2 rounded w-full"
              >
                <option value="">All Levels</option>
                {experienceLevels.map((exp) => (
                  <option key={exp} value={exp}>{exp}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
