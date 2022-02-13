import React from "react";

import data from "../../data/db.json";

function Tours() {
  return<>
  
    {data.map((tour) => {
      return (
        <div>
          <p>{tour.name}</p>
          <img src={tour.image} alt ="Tour"/>
        </div>
      )
    })}
  </>
}

export default Tours;
