import React, { useEffect, useRef, useState } from 'react'

export const UseRef2 = () => {
    const [message,setMessage] = useState(['Hello, how are you?','I am fine'])

    const divref = useRef()

    const addmsg = () => {
        setMessage([...message,'New message'])
    }
    useEffect(() => {
        if(divref.current){
            divref.current.style.color = "blue"
        }
    },[message])

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseRef2</h1>
        <div ref={divref}>
            {message.map((m) => {
                return <div>{m}</div>
            })}
        </div>
        <button onClick={addmsg}>Add Message</button>

    </div>
  )
}