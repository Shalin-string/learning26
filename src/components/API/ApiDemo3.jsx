import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const ApiDemo3 = () => {
    const{register,handleSubmit}=useForm()
    const getdata = async() => {
        const res = await axios.get("https://node5.onrender.com/product/getall")
        console.log(res)
        if(res.status==200){
                    //alert("user added...")
                    toast.success("user added !!")
                }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo22</h1>
        <form onSubmit={handleSubmit(getdata)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>price</label>
                <input type='text' {...register("price")}></input>
            </div>
            <div>
                <label>description</label>
                <input type='text' {...register("description")}></input>
            </div>
            <div>
                <label>Clolors</label> <br></br>

                <input type='checkbox' value="red" {...register("colors")}></input>red<br></br>
                <input type='checkbox' value="green" {...register("colors")}></input>green<br></br>
                <input type='checkbox' value="blue" {...register("colors")}></input>blue<br></br>
            </div>
            
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
