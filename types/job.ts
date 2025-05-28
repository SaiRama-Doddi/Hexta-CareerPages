export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experience: string;
  salary?: string;
  postedDate: Date;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits?: string[];
}

export interface JobApplication {
  jobId: string;
  name: string;
  email: string;
  phone: string;
  resume: File;
  coverLetter: string;
}
