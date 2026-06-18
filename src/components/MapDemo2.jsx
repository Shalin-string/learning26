import React from 'react'

export const MapDemo2 = () => {
    var users = [
        {id:1,name:"shalin ",age:19},
        {id:2,name:"om ",age:21},
        {id:3,name:"jay ",age:25}
    ]
  return (
    <div style={{textAlign:"center"}}>
        {
        users.map((mp) => {
            return <li>{mp.id} {mp.name}  {mp.age}</li>
        })
    }
    </div>
  )
}
