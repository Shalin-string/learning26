import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export const Login = () => {
    const {register, handleSubmit} = useForm()
    const loginHandler = async(data)=>{
        const res = await axios.post("https://node5.onrender.com/user/login",data)
        
        console.log(res.data.data)
        localStorage.setItem("token",res.data.data)
        document.cookie = `token=${res.data.data}; path=/`;
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(loginHandler)}>
            <div>
                <label>EMAIL</label>
                <input type="email" {...register("email")} />
            </div>
            <div>
                <label>PASSWORD</label>
                <input type="password" {...register("password")} />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}