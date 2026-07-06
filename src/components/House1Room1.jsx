import React, { useContext } from 'react'
import { WaterContext } from './WaterContext'

export const House1Room1 = () => {
    const {flow,data} = useContext(WaterContext)
  return (
    <div>
        <h3>House 1 Room 1</h3>
        <p>Water Flow: {flow}</p>
        <p>Society : {data.society}</p>
    </div>
  )
}
