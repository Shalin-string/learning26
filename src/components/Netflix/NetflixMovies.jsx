import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const NetflixMovies = () => {
    const location = useLocation()
    const movies = [
        {id:101, name:"3 idiots"},
        {id:102, name:"PK"},
        {id:103, name:"Dangal"},
        {id:104, name:"Secret Superstar"},
        {id:105, name:"Chhichhore"},
    ]
  return (
    <div style={{textAlign:"center"}}><h1>NetflixMovies</h1>
    {
        movies.map((movie) => {
            return <li>
            <Link to={`/watch/${movie.name}`}>{movie.name}</Link>
            </li>
        })
    }
    <Link to="/NetflixHome" state={{ from: location.pathname }}>
      <button style={{ marginTop: '20px' }}>go to common</button>
    </Link>
    </div>
  )
  
}
