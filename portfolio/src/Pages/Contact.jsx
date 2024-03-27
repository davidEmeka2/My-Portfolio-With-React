import React, { useEffect, useState } from 'react'
import "../Pages/contactPage.css"


function Contact({font,bgColor1,bgColor2,fontColor1,fontColor2}) {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
    <header className='contactHeader'>

    <div className='contactPic'></div>

    <section className='contactHeaderSec' style={fontColor2}>

     

    <h1 className='text-4xl contactH1' style={font}>Let’s build an amazing project together.</h1>

    <p style={font} className='describe'>Describe your project and leave your contact info, I'll get back to you within 24 hours.
    </p>

    </section>
    </header>

    <section className='clickProject' style={font}>

    <div className='contactPic'></div>

    <h1 className='projectTypeH1 text-3xl' style={fontColor2}>What is your project about?</h1>

    </section>

    <section className='projects' style={font}>

    <div className='contactPic'></div>

   <div className='selectProjects'>
    <p>Website Design</p>

    <p>Website Redesign</p>

    <p>Landing Page Design</p>

    <p>Graphics Design</p>

    <p>UI Design</p>

    <p>Single Page Applications</p>

    <p>Consultation and Training</p>
   </div>
    
    </section>
    </>
  )
}

export default Contact