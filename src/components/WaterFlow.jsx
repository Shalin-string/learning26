import React, { createContext } from 'react'
import { House1 } from './House1'
import { WaterContext } from './WaterContext'
// import waterContext from './WaterContext'
// import { House1 } from './House1'

export const WaterFlow = () => {
    var flow = "water"
    var data = {
        society :"Abc",
        name:"123456"
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>Water Flow</h1>
        <WaterContext.Provider value={{flow,data}}>
            <House1></House1>
        </WaterContext.Provider>

    </div>
  )
}
