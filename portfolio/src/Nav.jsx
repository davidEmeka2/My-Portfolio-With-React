import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Aos from "aos"
import "aos/dist/aos.css"


function Nav({font,themeChanger, bgColor1, bgColor2, fontColor1, fontColor2}) {

  useEffect(()=>{
    Aos.init()
    return () =>{
      Aos.refresh()
      Aos.refreshHard()
    }
  },[])


const [navOpen, setNavOpen] = useState(false)


function navOpener() {


  if(navOpen === true){
    setNavOpen(false)
  }
  else{
    setNavOpen(true)
  }


}

  return (
    <>
    {!navOpen && <div onClick={navOpener} className='hamburger2' > 
    <div className='raiseAm' style={bgColor2}></div>
    <div className='raiseAm' style={bgColor2}></div>
    <div className='raiseAm' style={bgColor2}></div>

    </div>}

    {navOpen && <div onClick={navOpener} className='hamburger' >
    <div className='closeAm' style={bgColor1}></div>
    <div className='closeAm2' style={bgColor1}></div>
    
 
    </div>}

    {navOpen && <nav className='nav'>
     
             
    {navOpen &&<ul className='navUL'>
   
    {navOpen &&<li style={font}><Link className='text' to="/"  onClick={navOpener}>Home</Link></li>}
    {navOpen && <li style={font}><Link to="/About" onClick={navOpener}>About</Link></li>}
    {navOpen &&<li style={font}><Link to="/Works"  onClick={navOpener}>Works</Link></li>}
    {navOpen &&<li style={font}><Link to="/Services"  onClick={navOpener}>Services</Link></li>}
    {navOpen && <li style={font}><Link to="/Contact"  onClick={navOpener}>Contact</Link></li>}

    </ul>}
   

    </nav>

    
}

{navOpen && <div className='scaleOpener' style={bgColor2}></div>}
    
{!navOpen && <div className='scaleCloser' style={bgColor2}></div>}


    </>
  )
}

export default Nav