import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Card from "./Card";
import Data from './Data';

function ncard(values){
    return(
      <Card 
        imgsrc = {values.imgsrc}
        Name = {values.Name}
      />
    );
}



ReactDOM.render(
  <>

    <h1 className="heading_style">Bollywood Hot Actress</h1>

  

  {Data.map(ncard)}


  </>,
  document.getElementById("root")
);
