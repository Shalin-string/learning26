import React, { useState } from 'react'

export const Input1 = () => {
    const [name, setName] = useState("")
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const [age, setAge] = useState("")
    const ageHandler = (e) => {
        setAge(e.target.value)
    }
    const [gender, setGender] = useState("")
    const genderHandler = (e) => {
        setGender(e.target.value)
    }
    const [flag, setFlag] = useState(false)
    const flagHandler = () => {
        setFlag(true)
    }


  return (
    <div>
        <h1>Input Demo</h1>
        <input type="text" placeholder='Enter your name' value={name} onChange={nameHandler}></input><br></br>
        <input type="number" placeholder='Enter your age' value={age} onChange={ageHandler}></input><br></br>
        Gender <br />
        male <input type="radio"  name='gender' value='male'></input><br />
        female <input type="radio"  name='gender' value='female'></input><br />

        <button onClick={flagHandler}>Submit</button>
        {flag && (
            <div>
                    <h2>Name: {name}</h2>
                <h2>Age: {age}</h2>
                <h2>Gender: {gender}</h2>
            </div>
        )}
    </div>
  )
}
