import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from './Pages/Home'
import { MyAppointment } from "./Pages/MyAppointment";
import { Appointment } from "./Pages/Appointment";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { MyProfile } from "./Pages/MyProfile";
import { Doctors } from "./Pages/Doctors";
import { Login } from "./Pages/Login";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";


function App() {
  return (
 
   <div className='mx-4 sm:mx-[10%]'>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/doctors' element={<Doctors/>} />
      <Route path='/doctors/:speciality' element={<Doctors/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/cantact' element={<Contact/>} />
      <Route path='/appointment/:docid' element={<Appointment/>} />
      <Route path='/my-appointment' element={<MyAppointment/>} />
      <Route path='/my-profile' element={<MyProfile/>} />
    </Routes>
    
    <Footer/>

   </div>
   
  )
}

export default App
