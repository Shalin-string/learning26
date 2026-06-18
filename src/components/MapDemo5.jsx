import React from 'react'

export const MapDemo5 = () => {
   var product =  [
  {
    "product_id": 101,
    "name": "Wireless Mouse",
    "brand": "Logitech",
    "price": 799,
    "category": "Electronics",
    "stock": 120,
    "rating": 4.5
  },
  {
    "product_id": 102,
    "name": "Mechanical Keyboard",
    "brand": "Redragon",
    "price": 2499,
    "category": "Electronics",
    "stock": 75,
    "rating": 4.6
  },
  {
    "product_id": 103,
    "name": "Gaming Headset",
    "brand": "HyperX",
    "price": 3499,
    "category": "Accessories",
    "stock": 50,
    "rating": 4.7
  },
  {
    "product_id": 104,
    "name": "USB-C Charger",
    "brand": "Samsung",
    "price": 1299,
    "category": "Electronics",
    "stock": 200,
    "rating": 4.4
  },
  {
    "product_id": 105,
    "name": "Laptop Stand",
    "brand": "Portronics",
    "price": 999,
    "category": "Office",
    "stock": 90,
    "rating": 4.3
  }
]
  return (
    <div>
        <h1>MapDemo5</h1>
        <table border={1} class = "table table-dark">
            <thead>
                <tr>
                    <td>product_id</td>
                    <td>Name</td>
                    <td>brand</td>
                    <td>price</td>
                    <td>category</td>
                    <td>stock</td>
                    <td>rating</td>
                </tr>
            </thead>
            <tbody>{
                product.map((m)=>{
                    return <tr>
                        <td>{m.product_id}</td>
                        <td>{m.name}</td>
                        <td>{m.brand}</td>
                        <td>{m.price}</td>
                        <td>{m.category}</td>
                        <td>{m.stock}</td>
                        <td>{m.rating}</td>
                    </tr>
                }
                )
            }
            </tbody>
        </table>

    </div>

  )
}
