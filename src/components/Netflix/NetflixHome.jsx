import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const NetflixHome = () => {
  const location = useLocation()
  const backTo = location.state?.from || '/NetflixShows'

  return (
    <div style={{textAlign: 'center'}}>
      <h1>NetflixHome</h1>
      <Link to={backTo}>
        <button style={{ marginTop: '20px' }}>Go back</button>
      </Link>
    </div>
  )
}
