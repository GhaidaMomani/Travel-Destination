
import React from "react";
import classes from "./Tour.module.css";



function Tour(props) {
    return(<>
    
    <div>
          <p className= {classes["tour-name"]}>{props.dataTour.name}</p>
          <img src={props.dataTour.image} alt ="TourDestinationPic"/>
        </div>
    </>
)
  }

  export default Tour;