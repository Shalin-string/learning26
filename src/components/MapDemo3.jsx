import React from 'react'

export const MapDemo3 = () => {
    var users = [
        {id:1,name:"shalin ",age:19},
        {id:2,name:"om ",age:21},
        {id:3,name:"jay ",age:25}
    ]
  return (
    <div style={{textAlign:"center"}}>

        <h1>MapDemo 3</h1>

        <table border={1}>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>{
                users.map((m)=>{
                    return <tr>
                        <td>{m.id}</td>
                        <td>{m.name}</td>
                        <td>{m.age}</td>
                    </tr>
                }
                )
            }
            </tbody>
        </table>
    </div>
  )
}
