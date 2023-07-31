import React from "react";

 function Card(val) {
    return (
      <div className="card">
        <img src={val.imgsrc} alt="Avatar" className="imgsec" />
        <div className="container">
          <h4><b>{val.Name}</b></h4>
          
        </div>
      </div>
    );
  } 

  export default Card;