import React from 'react'

export const MapDemo1 = () => {
    var arr = [1,2,3,4,5]
  return (
    <div style={{textAlign:"center"}}>
        {
            arr.map((em)=>{
                return <li>{em}</li>
            }
            )
        }
    </div>
  )
}
