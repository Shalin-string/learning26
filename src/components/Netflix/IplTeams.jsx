import React from 'react'
import { Link } from 'react-router-dom'

export const IplTeams = () => {
    const teams = [
        {id:1, name:"Chennai Super Kings"},
        {id:2, name:"Mumbai Indians"},
        {id:3, name:"Royal Challengers Bangalore"},
        {id:4, name:"Kolkata Knight Riders"},
        {id:5, name:"Delhi Capitals"},
        {id:6, name:"Rajasthan Royals"},
        {id:7, name:"Punjab Kings"},
        {id:8, name:"Sunrisers Hyderabad"},
        {id:9, name:"Lucknow Super Giants"},
        {id:10, name:"Gujarat Titans"},
    ]
  return (
    <div style={{textAlign:"center"}}>
    <h1 style={{textAlign:"center"}}>IplTeams</h1>
    {
        teams.map((team) => {
            return <li>
                <Link to={`/details/${team.id}`}>{team.name}</Link>
                </li>
        })
    }

    </div>
  )
}
