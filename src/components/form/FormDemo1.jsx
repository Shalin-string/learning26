import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const{register, handleSubmit,formState:{errors},watch}=useForm({mode:"onChange"})
    const submitHandler = (data) =>{
        console.log(data)
    }
    const password = watch("password")

    const validationSchema ={
        passwordHandler :{
            required : {
                value :true,
                message:"Password is required"
            }
        },
        conformpassword:{
            validate:(params)=>{
                return password == params || "Both password should match"
            }
        }
    }

  return (
    <div style={{textAlign:'center'}}>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Password:</label>
                <input type='text' {...register("password",validationSchema.passwordHandler)}></input>
                {errors.password?.message}
                
            </div>
            <div>
                <label>confirm Password:</label>
                <input type='text' {...register("confirmpassword",validationSchema.conformpassword)}></input>
                {errors.confirmpassword?.message}

            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>

    </div>
  )
}
