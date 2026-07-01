import React, { useEffect, useRef } from 'react'

export const UseRef = () => {
    const divref = useRef()

    useEffect(() => {
        divref.current.scrollIntoView({
            behavior:"smooth"
        })
    },[])
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseRef</h1>
        <div>

        name = <input type="text" />
        </div>
        <div style={{background:"orange",height:"800px"}}></div>
        <div style={{background:"white",height:"800px"}}></div>
        <div ref={divref} style={{background:"green",height:"800px"}}></div>
    </div>
  )
}
