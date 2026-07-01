import axios from "axios";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export const AddProducts = () => {
    const{register,handleSubmit,control}=useForm({defaultValues:{products:[{name:"",price:0,description:"",colors:[],size:[],isAvailable:false,unit:0}]}})
    
        const {append,remove,fields}=useFieldArray({control,name:"products"})
    
        const submitHandler = async (data) => {
    const res = await axios.post("https://node5.onrender.com/product/addproducts", data.products);
    console.log(res.data);
}
        


  return (
    <div style={{textAlign:"center"}}>
        <h1>AddProducts</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {
                fields.map((f,index)=>{
                    return <div>
                        <div>
                            <label style={{fontWeight:"bold"}}>NAME</label>
                            <input type='text' {...register(`products.${index}.name`)}></input>
                        </div>
                        <div>
                            <label style={{fontWeight:"bold"}}>Price</label>
                            <input type='number' {...register(`products.${index}.price`)}></input>
                        </div>
                        <div>
                            <label style={{fontWeight:"bold"}}>Description</label>
                            <input type='text' {...register(`products.${index}.description`)}></input>
                        </div>
                        <div>
                            <label style={{fontWeight:"bold"}}>Colors</label> <br /> 
                           <input type="checkbox" value="Red" {...register(`products.${index}.colors`)}/> Red <br></br>
                           <input type="checkbox" value="Green" {...register(`products.${index}.colors`)}/> Green  <br></br>
                           <input type="checkbox" value="Blue" {...register(`products.${index}.colors`)}/> Blue  <br></br>

                        
                        </div>
                        <div>
                            <label>size</label>
                            <input type='text' {...register(`products.${index}.size`)}></input>
                        </div>
                        <div>
                            <label style={{fontWeight:"bold"}}>isAvaliable</label>   <br />
                            <input type='checkbox' {...register(`products.${index}.isAvailable`)}></input>
                        </div>
                        <div>
                            <label style={{fontWeight:"bold"}}>Unit</label>
                            <input type='number' {...register(`products.${index}.unit`)}></input>
                        </div>
                    </div>
                })
            }
            <div>
                
                <input type='submit'></input>
            </div>
        </form> 
        <button type="button" onClick={() => append({ name: "", price: 0, description: "", colors: [], size: [], isAvailable: false, unit: 0 })}>Append</button>
    </div>
  )
};