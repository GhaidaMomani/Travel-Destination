import React from "react";
import data from "../../data/db.json";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useState } from 'react';

function TourDetails() {
  function findTour(id) {
    return data.filter((tour) => {
      return tour.id === id;
    })[0];
  }

  const { id } = useParams();

  const tourObj = findTour(id);

  const [readMore , setReadMore] = useState (false);
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="tour-detail">
            <p className>{tourObj.id}</p>
            <p>{tourObj.name}</p>
            <p>{tourObj.info}</p>
            <p>{tourObj.price}</p>
            <img src={tourObj.image} alt="" className="img" />
            {/* <p >{tourObj.image}</p> */}

            {readMore? tourObj.info : tourObj.info.substring(0,200)}
            <button onClick={() => setReadMore(!readMore)} >
                     {readMore? 'Show Less': 'Show More'}
                 </button>
            
          </div>

          
        </section>
      </main>

      <Footer />
    </>
  );
}

export default TourDetails;
