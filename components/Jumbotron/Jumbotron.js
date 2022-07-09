import React from 'react'

export default function Jumbotron() {
  return (
    <div className='p-5 mb-4 bg-light rounded-3'>
      <div className='container-fluid py-5'>
          <h1 className='display-4 fw-bold'>Cats World</h1>
          <p className='lead'>
              Find your new best friend today. Adopt a wonderful cat.
          </p>
          <button type="button" className="btn btn-primary">Start Looking</button>
      </div>
    </div>
  )
}
