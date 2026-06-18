import React, { useState } from 'react'
import bombImg from "../assets/bomb.png";

export const FindGameBomb = () => {
    const gridsize = 5;
    var totaltiles = gridsize * gridsize;
    const [clickedTiles, setclickedTiles]  = useState([])

    const clickHandler = (index) => {

    setclickedTiles([...clickedTiles, index]);

    if(index === randNo){
        alert("💣 Bomb Found!");
    }
}

    const [randNo] = useState(
    Math.floor(Math.random() * totaltiles));

    console.log("Bomb Position:", randNo);

  return (
    <div style={{textAlign:"center"}}>
        <h1>FindBomb</h1>
        
     <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridsize},50px)`,
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: totaltiles }).map((_, index) => {
          return (
            <div
            onClick={()=>{clickHandler(index)}}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                //backgroundColor: "white",
                backgroundColor:clickedTiles.includes(index)?"gray":"white",
                cursor: "pointer",
                backgroundImage:
                index === randNo && clickedTiles.includes(index)
                ? `url(${bombImg})`
                : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >{index}</div>
          );
        })}
      </div>
    </div>
  );
};