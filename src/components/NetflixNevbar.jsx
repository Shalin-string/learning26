import React from 'react'
import { NavLink } from 'react-router-dom'

export const NetflixNevbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                to="/NetflixHome"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                Netflix Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/NetflixShows"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                NetflixShows
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/NetflixMovies"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                NetflixMovies
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                to="/IplTeams"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                IplTeam's Detail
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink
                to="/Students"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                Students
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/UseCount1"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                UseCount1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Input1"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                Input1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/FormDemo1"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                formDemo1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/FormDemo2"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                formDemo2
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                to="/FormDemo4"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                formDemo4
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/FormDemo5"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                formDemo5
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/FindGameBomb"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                BombGame
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ApiDemo1"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                APIDEMO1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ApiDemo2"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                APIDEMO2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ApiDemo22"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                APIDEMO22
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/OmdbSearch"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                OmdbSearch
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ApiDemo3"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                ApiDemo3
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Login"
                className="nav-link"
                style={({ isActive }) => ({ color: isActive ? '#4da6ff' : 'white' })}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
