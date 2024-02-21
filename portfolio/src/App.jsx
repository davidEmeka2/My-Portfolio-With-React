import { useEffect, useState } from 'react'
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
import bigMone from "./assets/big money.mp3"
import konoh from "./assets/konoha.mp3"
import foreve from "./assets/Forever.mp3"




function App() {

  let song1 = new Audio(bigMone)
  let song2 = new Audio(konoh)
  let song3 = new Audio(foreve)

function bigMoney(){
  song3.pause()
  song2.pause() 
  song1.play()  
}  

function konoha(){
  song3.pause()
  song1.pause()
  song2.play()
}

function forever (){
  song1.pause()
  song2.pause()
  song3.play()
}

function pauser(){
  song1.pause()
  song2.pause()
  song3.pause()
  song1.currentTime = 0
  song2.currentTime = 0
  song3.currentTime = 0
}

useEffect(()=>{
  return () =>{
    pauser();
  }
},[])

  
  const [font, setFont] = useState({fontFamily:"Exo"})

  const Playfair = ()=>{
    if(font.fontFamily === "Exo" || font.fontFamily === "Open Sans" || font.fontFamily === "Roboto Slabs"){
      setFont({fontFamily:"Playfair Display"})
      song1.pause()
  song2.pause()
  song3.pause()
    }
   
  }

  const Roboto = ()=>{
    if(font.fontFamily === "Exo" || font.fontFamily === "Open Sans" || font.fontFamily === "Playfair Display"){
      setFont({fontFamily:"Roboto Slabs"})
      song1.pause()
  song2.pause()
  song3.pause()
    }
   
  }

  const Opensans = ()=>{
    if(font.fontFamily === "Exo" || font.fontFamily === "Roboto Slabs" || font.fontFamily === "Playfair Display"){
      setFont({fontFamily:"Open Sans"})
      song1.pause()
  song2.pause()
  song3.pause()
    }
    
  }

  const defaultFont = ()=>{
    if(font.fontFamily === "Open Sans" || font.fontFamily === "Roboto Slabs" || font.fontFamily === "Playfair Display"){
      setFont({fontFamily:"Exo"})
      song1.pause()
  song2.pause()
  song3.pause()
    }
    
  }


  const [bgColor1, setBgColor1] = useState({backgroundColor:"white"})
  const [bgColor2, setBgColor2] = useState({backgroundColor:"black"})
  const [fontColor1, setFontColor1] = useState({color:"white"})
  const [fontColor2, setFontColor2] = useState({color:"black"})

  function themeChanger(){
    if(fontColor1.color === "white" || 
    fontColor2.color === "black" ||
    bgColor1.backgroundColor === "white" ||
    bgColor2.backgroundColor === "black" ||
    fontColor1.color === "#2a5298" || 
    fontColor2.color === "#1e3c72" ||
    bgColor1.backgroundColor === "#1e3c72" ||
    bgColor2.backgroundColor === "#2a5298" ||
    fontColor1.color === "#ffb199" || 
    fontColor2.color === "#ff0844" ||
    bgColor1.backgroundColor === "#ff0844" ||
    bgColor2.backgroundColor === "#ffb199" 


    ){
      setBgColor1({backgroundColor:"#fc00ff"})
      setBgColor2({backgroundColor:"#00dbde"})
      setFontColor1({color:"#00dbde"})
      setFontColor2({color:"#fc00ff"})
      song1.pause()
  song2.pause()
  song3.pause()
    }
  }

  function themeChanger2(){
    if(fontColor1.color === "white" || 
    fontColor2.color === "black" ||
    bgColor1.backgroundColor === "white" ||
    bgColor2.backgroundColor === "black" ||
    fontColor1.color === "#00dbde" || 
    fontColor2.color === "#fc00ff" ||
    bgColor1.backgroundColor === "#fc00ff" ||
    bgColor2.backgroundColor === "#00dbde" ||
    fontColor1.color === "#ffb199" || 
    fontColor2.color === "#ff0844" ||
    bgColor1.backgroundColor === "#ff0844" ||
    bgColor2.backgroundColor === "#ffb199" 
    ){
      setBgColor1({backgroundColor:"#1e3c72"})
      setBgColor2({backgroundColor:"#2a5298"})
      setFontColor1({color:"#2a5298"})
      setFontColor2({color:"#1e3c72"})
      song1.pause()
  song2.pause()
  song3.pause()
    }
  }

  function themeChanger3(){
    if(fontColor1.color === "white" || 
    fontColor2.color === "black" ||
    bgColor1.backgroundColor === "white" ||
    bgColor2.backgroundColor === "black" ||
    fontColor1.color === "#00dbde" || 
    fontColor2.color === "#fc00ff" ||
    bgColor1.backgroundColor === "#fc00ff" ||
    bgColor2.backgroundColor === "#00dbde" ||
    fontColor1.color === "#2a5298" || 
    fontColor2.color === "#1e3c72" ||
    bgColor1.backgroundColor === "#1e3c72" ||
    bgColor2.backgroundColor === "#2a5298" 
    ){
      setBgColor1({backgroundColor:"#ff0844"})
      setBgColor2({backgroundColor:"#ffb199"})
      setFontColor1({color:"#ffb199"})
      setFontColor2({color:"#ff0844"})
      song1.pause()
  song2.pause()
  song3.pause()
    }
  }

  function defaultTheme(){
    if(fontColor1.color === "white" || 
    fontColor2.color === "black" ||
    bgColor1.backgroundColor === "white" ||
    bgColor2.backgroundColor === "black" ||

    fontColor1.color === "#ffb199" || 
    fontColor2.color === "#ff0844" ||
    bgColor1.backgroundColor === "#ff0844" ||
    bgColor2.backgroundColor === "#ffb199" ||
    fontColor1.color === "#00dbde" || 
    fontColor2.color === "#fc00ff" ||
    bgColor1.backgroundColor === "#fc00ff" ||
    bgColor2.backgroundColor === "#00dbde" ||
    fontColor1.color === "#2a5298" || 
    fontColor2.color === "#1e3c72" ||
    bgColor1.backgroundColor === "#1e3c72" ||
    bgColor2.backgroundColor === "#2a5298" 
    ){
      setBgColor1({backgroundColor:"white"})
      setBgColor2({backgroundColor:"black"})
      setFontColor1({color:"white"})
      setFontColor2({color:"black"})
      song1.pause()
  song2.pause()
  song3.pause()
    }
  }

  

  


  return (
    <>
   

      <BrowserRouter>
      
      <Loading font={font}/>
      <Nav font={font} themeChanger={themeChanger} bgColor1={bgColor1} bgColor2={bgColor2} fontColor1={fontColor1} fontColor2={fontColor2}/>
      <Routes>
        <Route path='/' element={<Home Playfair={Playfair} font={font} defaultFont={defaultFont} Roboto={Roboto} Opensans={Opensans} themeChanger={themeChanger} bgColor1={bgColor1} bgColor2={bgColor2} fontColor1={fontColor1} fontColor2={fontColor2} konoha={konoha} bigMoney={bigMoney} forever={forever} pauser={pauser} themeChanger2={themeChanger2} themeChanger3={themeChanger3} defaultTheme={defaultTheme}/>}></Route> 

        <Route path='/About' element={<About font={font} themeChanger={themeChanger} bgColor1={bgColor1} bgColor2={bgColor2} fontColor1={fontColor1} fontColor2={fontColor2} />}></Route>

        <Route path='/Works' element={<Works font={font} themeChanger={themeChanger} bgColor1={bgColor1} bgColor2={bgColor2} fontColor1={fontColor1} fontColor2={fontColor2}/>}></Route>

        <Route path='/Services' element={<Services font={font} themeChanger={themeChanger} bgColor1={bgColor1} bgColor2={bgColor2} fontColor1={fontColor1} fontColor2={fontColor2}/>}></Route>

        <Route path='/Contact' element={<Contact font={font} themeChanger={themeChanger} bgColor1={bgColor1} bgColor2={bgColor2} fontColor1={fontColor1} fontColor2={fontColor2}/>}></Route>
      </Routes>
      <AnimatedCursor/>
      </BrowserRouter>
    </>
  )
}

export default App
