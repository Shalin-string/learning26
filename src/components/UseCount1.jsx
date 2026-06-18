import React, { useState } from 'react'
/*Employees[c]
array -->use state [{id,name,age,salary}]
table display

id name age salary action
1  ram  23  23000  [delete]




[delete] -->click(id) -->function  ->deleteEmployee(id)
op:
id ---> array delete ??? */
 
export const UseCount1 = () => {
  var [Employees, setEmployees] = useState([
    {id:1,name:"ram",age:23,salary:23000},
    {id:2,name:"shyam",age:24,salary:24000},
    {id:3,name:"hari",age:25,salary:25000},
 ]);

const deleteEmployee = (id) => {

        const newEmployees = Employees.filter((emp) => {
            return emp.id !== id
        })

        setEmployees(newEmployees)
    }
  return (
    <div>
        <h1>Employee List</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>  
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </thead>  
            <tbody>
                {
                    Employees.map((emp)=>{
                        return(
                            <tr key={emp.id}> 
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.age}</td>
                                <td>{emp.salary}</td>
                                <td><button onClick={() => deleteEmployee(emp.id)}>Delete</button></td>
                            </tr>
                        )
                    }
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
