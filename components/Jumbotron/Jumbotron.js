import React from 'react'
import { useRouter } from 'next/router'

export default function Jumbotron() {
  const router = useRouter()
  return (
    <div className='p-5 mb-4 bg-light rounded-3'>
      <div className='container-fluid py-5'>
          <h1 className='display-4 fw-bold'>CATastrophe</h1>
          <p className='lead'>
              Find your new best friend today. Adopt a cat companion.
          </p>
          <button type="button" onClick={() => router.push('/cats')} className="btn btn-primary">Start Looking</button>
      </div>
    </div>
  )
}
