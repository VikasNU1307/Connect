import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Navbar from '.js/components/navbar/Navbar';
import AvailableLocation from './Pages/available-location/AvailableLocation';
import Dashboard from './Pages/dashboard/Dashboard';
import DriversOnboarding from './Pages/drivers-Onboarding/DriversOnboarding';
import NumAmbulance from './Pages/ambulance-list/AmbulancesList';
import NumDriver from './Pages/Drivers-list/DriversList';
import Onboarding from './Pages/onboarding/Onboarding';
import UserProfile from './Pages/user-profile/UserProfile';
import AmbulanceOnboarding from './Pages/ambulance-onboarding/AmbulanceOnboarding';
import User from './Pages/User/User';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
   <>
   {/* <Dashboard /> */}
   <BrowserRouter>
<Navbar />
<SideBar>
 <Routes >
  <Route  path="/" element={<Dashboard />}  />
  <Route  path="/onboarding" element={<Onboarding />}  />
  <Route  path="/drivers-onboarding" element={<DriversOnboarding />}  />
  <Route  path="/ambulance-onboarding" element={<AmbulanceOnboarding />}  />
  <Route  path="/availablelocation" element={<AvailableLocation />}  />
  <Route  path="/drivers-list" element={<NumDriver />}  />
  <Route  path="/ambulance-list" element={<NumAmbulance />}  />
  <Route  path="/user-profile" element={<UserProfile />}  />
  <Route  path="/user" element={<User />}  />

 </Routes>
 </SideBar>
   
   </BrowserRouter>
   </>
  );
}

export default App;
