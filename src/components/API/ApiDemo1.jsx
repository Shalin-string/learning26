import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader'

export const ApiDemo1 = () => {
const [message, setmessage] = useState("")
const [users, setusers] = useState([])
const [isLoading, setisLoading] = useState(false)
    const getUsers = async()=>{
        
        setisLoading(true)    
        const res = await axios.get("https://node5.onrender.com/user/user/")
        console.log(res) //axios object
        //axios object -->5 param -->data variable -->api response
        console.log(res.data)
        console.log(res.data.message)//""
        console.log(res.data.data) //[]
        setmessage(res.data.message)
        setusers(res.data.data) //-->fix
        setisLoading(false)    

    }
    
    useEffect(()=>{
        getUsers()
    },[])
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo1</h1>
        {
            isLoading && <Loader/>
        }
        {message}
        {/* <button onClick={getUsers}>GET</button> */}
        {
        users.map((u)=>{
            return <li>{u.name}</li>
        })
        
        }
    </div>
  )
}