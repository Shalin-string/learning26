import React from 'react'

export const MapDemo6 = () => {
    var products = [
  {id:1, name:"iPhone 15", category:"Electronics", price:79999, stock:25, rating:4.7, brand:"Apple", discount:10, isAvailable:true, createdAt:"2026-01-10"},
  {id:2, name:"Samsung Galaxy S24", category:"Electronics", price:69999, stock:30, rating:4.5, brand:"Samsung", discount:12, isAvailable:true, createdAt:"2026-02-15"},
  {id:3, name:"Nike Running Shoes", category:"Footwear", price:4999, stock:50, rating:4.3, brand:"Nike", discount:20, isAvailable:true, createdAt:"2026-03-01"},
  {id:4, name:"Adidas Sneakers", category:"Footwear", price:4599, stock:0, rating:4.2, brand:"Adidas", discount:18, isAvailable:true, createdAt:"2026-01-20"},
  {id:5, name:"Dell Inspiron Laptop", category:"Computers", price:55999, stock:15, rating:4.4, brand:"Dell", discount:15, isAvailable:true, createdAt:"2026-02-05"},
  {id:6, name:"HP Pavilion Laptop", category:"Computers", price:58999, stock:12, rating:4.3, brand:"HP", discount:14, isAvailable:true, createdAt:"2026-03-10"},
  {id:7, name:"Sony Headphones", category:"Accessories", price:2999, stock:60, rating:4.6, brand:"Sony", discount:25, isAvailable:true, createdAt:"2026-01-25"},
  {id:8, name:"Boat Earbuds", category:"Accessories", price:1499, stock:0, rating:4.1, brand:"Boat", discount:30, isAvailable:true, createdAt:"2026-02-18"},
  {id:9, name:"LG Smart TV", category:"Electronics", price:45999, stock:20, rating:4.5, brand:"LG", discount:17, isAvailable:false, createdAt:"2026-03-05"},
  {id:10, name:"Mi Smart Watch", category:"Wearables", price:3999, stock:70, rating:4.2, brand:"Xiaomi", discount:22, isAvailable:true, createdAt:"2026-01-30"},
  {id:11, name:"Puma T-Shirt", category:"Clothing", price:999, stock:80, rating:4.0, brand:"Puma", discount:35, isAvailable:true, createdAt:"2026-02-12"},
  {id:12, name:"Levi's Jeans", category:"Clothing", price:2499, stock:45, rating:4.4, brand:"Levis", discount:28, isAvailable:false, createdAt:"2026-03-08"},
  {id:13, name:"Canon DSLR Camera", category:"Electronics", price:65999, stock:10, rating:4.6, brand:"Canon", discount:13, isAvailable:true, createdAt:"2026-01-18"},
  {id:14, name:"Philips Trimmer", category:"Personal Care", price:1999, stock:55, rating:4.3, brand:"Philips", discount:20, isAvailable:true, createdAt:"2026-02-22"},
  {id:15, name:"Wildcraft Backpack", category:"Bags", price:1799, stock:65, rating:4.2, brand:"Wildcraft", discount:27, isAvailable:true, createdAt:"2026-03-12"}
];


  return (
    <div>
        <table class = "table table-dark">
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>catagory</td>
                    <td>price</td>
                    <td>stock</td>
                    <td>rating</td>
                    <td>brand</td>
                    <td>discount</td>
                    <td>status</td>
                    <td>createdAt</td>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((pr) => {
                        return <tr>
                            <td>{pr.id}</td>
                            <td>{pr.name}</td>
                            {/* If category === "Electronics", set text color blue, otherwise **black`. */}
                            {/* If category === "Clothing", make font style italic, otherwise normal. */}
                            <td style={{color:pr.category == "Electronics" ? "blue" : "black",fontStyle:pr.category=="Clothing" && "italic"}}>{pr.category}</td>
                            {/* If price < 2000, set background lightgreen, otherwise no background. */}
                            {/* If price > 20000 AND discount > 10, set text color blue, otherwise **black`. */}
                            <td style={{color:pr.price >50000 ? "red" : "black", backgroundColor:pr.price<2000 && "lightgreen",color:pr.price>20000 && pr.discount>10 ?"blue":"black" }}>{pr.price}</td>
                            {/* If stock < 10, show text color orange, otherwise **green`. */}
                            {/* If stock === 0, set background lightgray, otherwise **white`. */}
                            <td style={{color:pr.stock<10 ?"orange":"green",backgroundColor:pr.stock==0 ?"lightgray":"white"}}>{pr.stock == 0 ? <p style={{color:"red"}}>"  Out of stock " </p>:<p style={{color:"green"}}> "In stocks"</p>}</td>
                            {/* If rating >= 4.5, make text bold, otherwise normal. */}
                            {/* If rating < 3, show text color red, otherwise **black`. */}
                            <td style={{color:pr.rating<3 ?"red":"black"}}>{pr.rating >= 4.5 ? <b>{pr.rating}</b> : pr.rating}</td>
                            {/* If brand === "Apple" OR brand === "Sony", set text color purple, otherwise **black`. */}
                            <td style={{color:pr.brand == "Apple"||pr.brand == "Sony" ? "purple" : "black"}}>{pr.brand}</td>
                           {/* Make background yellow if discount > 20, otherwise **white`. */}
                           {/* Show "🔥 Hot Deal" only if discount >= 25. */}
                            <td style={{backgroundColor: pr.discount > 20 ? "yellow" : "white",color:"black"}}>{pr.discount >= 25 ? "🔥 Hot Deal" : pr.discount}</td>
                            {/* Reduce opacity to 0.5 if isAvailable === false, otherwise **1`. */}
                            <td style={{opacity:pr.isAvailable ? "1" : "0.5 "}}>{pr.isAvailable ? "Avaliable" : "Not avaliable"}</td>
                            <td>{pr.createdAt}</td>

                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
