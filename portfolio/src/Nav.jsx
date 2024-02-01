import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Nav() {

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
   
      <li><Link className='text' to="/" >Home</Link></li>
      <li><Link to="/About" >About</Link></li>
      <li><Link to="/Works">Works</Link></li>
      <li><Link to="/Services">Services</Link></li>
      <li><Link to="/Contact">Contact</Link></li>

    </ul>}
   

    </nav>

    
}

{navOpen && <div className='scaleOpener'></div>}
    
{!navOpen && <div className='scaleCloser'></div>}


    </>
  )
}

export default Nav