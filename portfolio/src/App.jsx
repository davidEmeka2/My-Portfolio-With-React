import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Loading from './Loading'
import Nav from './Nav'
import Home from "./Pages/Home"
import About from './Pages/About'
import Works from './Pages/Works'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import AnimatedCursor from "./AnimatedCursor"



function App() {
  


  return (
    <>
   

      <BrowserRouter>
      
      <Loading/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route> 
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Works' element={<Works/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      <AnimatedCursor/>
      </BrowserRouter>
    </>
  )
}

export default App
