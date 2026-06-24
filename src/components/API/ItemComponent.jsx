import axios from "axios";
import React, { useEffect, useState } from "react";

export const ItemComponent = () => {
  const [message, setmessage] = useState([]);
  const getdata = async () => {
    const res = await axios.get(`https://node5.onrender.com/item`, {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        Authorization: `Bearer ${localStorage.getItem("token")}`},
    });
    console.log(res.data.data);
    setmessage(res.data.data);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>ItemComponent</h1>
      {/* <button onClick={getdata}>GET</button> */}
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>color</th>
            <th>price</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {message.map((item) => (
            <tr>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td >{item.status ? "Active" : "NotActive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
