import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Aos from "aos"
import "aos/dist/aos.css"


function Nav() {

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
    <div className='raiseAm'></div>
    <div className='raiseAm'></div>
    <div className='raiseAm'></div>

    </div>}

    {navOpen && <div onClick={navOpener} className='hamburger' >
    <div className='closeAm'></div>
    <div className='closeAm2'></div>
    
 
    </div>}

    {navOpen && <nav className='nav'>
     
             
    {navOpen &&<ul className='navUL'>
   
    {navOpen &&<li><Link className='text' to="/"  onClick={navOpener}>Home</Link></li>}
    {navOpen && <li><Link to="/About" onClick={navOpener}>About</Link></li>}
    {navOpen &&<li><Link to="/Works"  onClick={navOpener}>Works</Link></li>}
    {navOpen &&<li><Link to="/Services"  onClick={navOpener}>Services</Link></li>}
    {navOpen && <li><Link to="/Contact"  onClick={navOpener}>Contact</Link></li>}

    </ul>}
   

    </nav>

    
}

{navOpen && <div className='scaleOpener'></div>}
    
{!navOpen && <div className='scaleCloser'></div>}


    </>
  )
}

export default Nav