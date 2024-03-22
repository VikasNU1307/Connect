import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import calendars from "./calender-dashboard/Calendars"
import AmbulanceOnboarding from "./js/Drivers-list/DriversList"
function App() {
  return (
   <>
   {/* <Dashboard /> */}
   <BrowserRouter>
     <calendars></calendars>
     <AmbulanceOnboarding></AmbulanceOnboarding>
   
   </BrowserRouter>
   </>
  );
}

export default App;
