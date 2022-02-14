import React from 'react'
import data from "../../data/db.json"
import { useParams } from 'react-router-dom';
import Header from "../header/Header";
import Footer from "../footer/Footer";

function TourDetails(){

       
    function findTour(id){

        return data.filter((tour)=>{ return tour.id === id })[0];

    }
 

    const {id} =useParams();

    const tourObj=findTour(id);




    return <>
    
    <Header/>
<main>
<section>
<div className="tour-detail">
<p className>{tourObj.id}</p>
<p >{tourObj.name}</p>
<p >{tourObj.info}</p>
<p >{tourObj.price}</p>
<p >{tourObj.image}</p>
</div>


</section>
</main>

    <Footer/>

    </>

}

export default TourDetails;