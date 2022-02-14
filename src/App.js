
import './App.css';

import Home from './components/home/Home.js' ;
////////////////////

import { Routes, Route, useRoutes } from "react-router-dom";

//import {Routes, Routs} from 'react-router-dom';
import React from 'react'
import TourDetails from './components/TourDetails/TourDetails';


const App = () => {
  const routes = useRoutes([
      { path: '/', element: <Home /> },

      {path : "/city/:id", element:<TourDetails />}
  ]);

  return routes;
};







// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to React Router!</h1>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/city/:id" element={<TourDetails />}/>
 
//       </Routes>
//     </div>
//   );
// }


export default App;
