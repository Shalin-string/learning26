import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const NetflixShows = () => {
  const location = useLocation()

  return (
    <div style={{textAlign: 'center'}}>
      <li>NetflixShows</li>
      <li> <Link to="/watch/friends" >Friends</Link> </li>
      <li> <Link to="/watch/money-heist" >Money heist</Link> </li>
      <li> <Link to="/watch/stranger-things" >stranger things</Link> </li>
      <li> <Link to="/watch/the-crown" >The Crown</Link> </li>
      <li> <Link to="/watch/dark" >dark</Link> </li>
      <Link to="/NetflixHome" state={{ from: location.pathname }}>
        <button style={{ marginTop: '20px' }}>go to common</button>
      </Link>
    </div>
  )
}
