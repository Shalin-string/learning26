import axios from "axios";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export const AddProducts = () => {
    const{register,handleSubmit,control}=useForm({defaultValues:{pros:[{name:"",price:0,description:"",colors:[],size:"m",isAvailable:false,unit:0}]}})
    
        const {append,remove,fields}=useFieldArray({control,name:"pros"})
    
        const submitHandler = async (data) => {
    const res = await axios.post(
        "https://node5.onrender.com/product/addproducts",data.pros);
    console.log(res.data);
}
        


  return (
    <div style={{textAlign:"center"}}>
        <h1>AddProducts</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {
                fields.map((f,index)=>{
                    return (<div key={f.id}>
                        <div>
                            <label>NAME</label>
                            <input type='text' {...register(`pros.${index}.name`)}></input>
                        </div>
                        <div>
                            <label>Price</label>
                            <input type='number' {...register(`pros.${index}.price`)}></input>
                        </div>
                        <div>
                            <label>Description</label>
                            <input type='text' {...register(`pros.${index}.description`)}></input>
                        </div>
                        <div>
                            <label>Colors</label> 
                           <input
                            type="checkbox" value="Red" {...register(`pros.${index}.colors`)}/> Red <br></br>

                        <input type="checkbox" value="Green" {...register(`pros.${index}.colors`)}/> Green  <br></br>

                        <input
                            type="checkbox"
                            value="Blue"
                            {...register(`pros.${index}.colors`)}
                        /> Blue
                        </div>
                        <div>
                            <label>size</label>
                            <input type='text' {...register(`pros.${index}.size`)}></input>
                        </div>
                        <div>
                            <label>isAvaliable</label>  
                            <input type='checkbox' {...register(`pros.${index}.isAvailable`)}></input>
                        </div>
                        <div>
                            <label>Unit</label>
                            <input type='number' {...register(`pros.${index}.unit`)}></input>
                        </div>
                    </div>
                )})
            }
            <div>
                
                <input type='submit'></input>
            </div>
        </form> 
        <button type="button" onClick={() => append({ name: "", price: 0, description: "", colors: [], size: "m", isAvailable: false, unit: 0 })}>Append</button>
    </div>
  )
};