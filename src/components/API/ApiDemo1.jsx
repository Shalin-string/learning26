import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {
    const [data, setdata] = useState([])
    const getusers = async() => {
        const res = await axios.get("https://node5.onrender.com/user/user/")
        console.log(res.data)
        setdata(res.data.data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo1</h1>
        <button onClick={getusers}>GET</button>
        <table class = "table table-dark">
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>IsActive</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user) => (
                <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.isActive ? "Active" : "Not Active"}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}
