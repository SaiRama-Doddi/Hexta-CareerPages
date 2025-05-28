// src/app/careers/apply/[jobid]/page.tsx
'use client'

import { useState } from 'react'

export default function ApplyPage({ params }: { params: { jobid: string } }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null as File | null,
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('jobId', params.jobid)
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('phone', form.phone)
    formData.append('coverLetter', form.coverLetter)
    if (form.resume) formData.append('resume', form.resume)

    const res = await fetch('/api/applications', {
      method: 'POST',
      body: formData
    })

    const data = await res.json()
    setStatus(data.message || 'Application submitted')
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h2>Apply for Job #{params.jobid}</h2>
      <input type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="tel" placeholder="Phone Number" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
      <textarea placeholder="Cover Letter" required value={form.coverLetter} onChange={e => setForm({ ...form, coverLetter: e.target.value })}></textarea>
      <input type="file" accept=".pdf,.doc,.docx" onChange={e => setForm({ ...form, resume: e.target.files?.[0] || null })} required />
      <button type="submit">Submit</button>
      <p>{status}</p>
    </form>
  )
}
