import React, { use } from 'react'
import { useParams } from 'react-router-dom';

export const Details = () => {
    const details = useParams().details;
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{textAlign:"center"}}>Details of {details}</h1>
    </div>
  )
}
