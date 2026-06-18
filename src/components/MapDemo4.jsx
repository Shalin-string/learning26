import React from 'react'

export const MapDemo4 = () => {
    var student = 
    [
  {
    "student_id": 101,
    "name": "Shalin Patel",
    "age": 19,
    "branch": "Computer Engineering",
    "semester": 4,
    "spi": 8.2,
    "isMale": true
  },
  {
    "student_id": 102,
    "name": "Riya Shah",
    "age": 18,
    "branch": "Information Technology",
    "semester": 2,
    "spi": 7.9,
    "isMale": false
  },
  {
    "student_id": 103,
    "name": "Amit Kumar",
    "age": 20,
    "branch": "Mechanical Engineering",
    "semester": 5,
    "spi": 8.5,
    "isMale": true
  },
  {
    "student_id": 104,
    "name": "Neha Verma",
    "age": 19,
    "branch": "Civil Engineering",
    "semester": 4,
    "spi": 7.8,
    "isMale": false
  },
  {
    "student_id": 105,
    "name": "Rahul Mehta",
    "age": 21,
    "branch": "Electrical Engineering",
    "semester": 6,
    "spi": 8.0,
    "isMale": true
  },
  {
    "student_id": 106,
    "name": "Pooja Desai",
    "age": 18,
    "branch": "Computer Engineering",
    "semester": 2,
    "spi": 8.7,
    "isMale": false
  },
  {
    "student_id": 107,
    "name": "Karan Singh",
    "age": 20,
    "branch": "Information Technology",
    "semester": 5,
    "spi": 7.5,
    "isMale": true
  },
  {
    "student_id": 108,
    "name": "Sneha Joshi",
    "age": 19,
    "branch": "Electronics Engineering",
    "semester": 4,
    "spi": 8.3,
    "isMale": false
  },
  {
    "student_id": 109,
    "name": "Vikram Patel",
    "age": 22,
    "branch": "Mechanical Engineering",
    "semester": 7,
    "spi": 7.6,
    "isMale": true
  },
  {
    "student_id": 110,
    "name": "Anjali Gupta",
    "age": 18,
    "branch": "Civil Engineering",
    "semester": 2,
    "spi": 8.9,
    "isMale": false
  }]


  return (
    <div>
        <table class = "table table-dark">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>branch</th>
                    <th>sem</th>
                    <th>spi</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    student.map((stu) => {
                        return <tr>
                            <td>{stu.student_id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                            <td>{stu.branch}</td>
                            <td>{stu.semester}</td>
                            <td>{stu.spi}</td>
                            <td>{stu.isMale ? "True" : "false"}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
