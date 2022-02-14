import React from "react";

import data from "../../data/db.json";
import { Link } from "react-router-dom";

import Tour from './tour/Tour';

function Tours() {
 
 return <>
 
 {
   data.map((tour)=><Link key={tour.id}  to={`/city/${tour.id}`}>
   <Tour  dataTour={tour}/>
   </Link>)
 }
  
  </>

}



export default Tours;