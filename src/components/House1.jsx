import React, { useContext } from 'react'
import { WaterContext } from './WaterContext'
import { House1Room1 } from './House1Room1'

export const House1 = () => {
    const {flow} = useContext(WaterContext )
  return (
    <div>
        <h2>House 1</h2>
        <p>Water Flow: {flow}</p>
        <House1Room1 />
    </div>
  )
}
