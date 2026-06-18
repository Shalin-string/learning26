import axios from "axios";
import React from "react";

export const ApiDemo2 = () => {

  const addUser = async () => {
    
    const userObj = {
      name: "amit",
      age: 23,
      email: "amit@gmail.com",
      password: "amit123",
      isActive: true,
    };

    const res = await axios.post("https://node5.onrender.com/user/user/",userObj);
    console.log(res) //axios objec
    console.log(res.data) // api respose..
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>ApiDemo2</h1>
      <button onClick={addUser}>ADD</button>
    </div>
  );
};