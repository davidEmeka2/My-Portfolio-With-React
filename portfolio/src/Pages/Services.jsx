import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import responsiveImage from "../assets/responsiveWebDesignImage-removebg-preview.png"
import graphicsImage from "../assets/graphicsDesignPics.png"
import uiUx from "../assets/UX-UI-DesignPic.png"
import spa from "../assets/Single-page-applicationPic.png"
import consultationTraning from "../assets/consultation_and_training.png"
import webMaitainance from "../assets/website-maintenance.png"
import performanceOpt from "../assets/perfomance Optimization.png"
import webResign from "../assets/website Redesign.png"

import "../Pages/servicesPage.css"


function Services({font,bgColor1,bgColor2,fontColor1,fontColor2}) {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const [imager, setImager] = useState(false)
  const [imager2, setImager2] = useState(false)
  const [imager3, setImager3] = useState(false)
  const [imager4, setImager4] = useState(false)
  const [imager5, setImager5] = useState(false)
  const [imager6, setImager6] = useState(false)
  const [imager7, setImager7] = useState(false)
  const [imager8, setImager8] = useState(false)
  


  return (
    <>
    


<div className="lighterBG4" data-aos="slide-right"> </div>
<div className="DarkerBG4" data-aos="slide-left"> </div>

<div className='servicesSecPageFlexer' style={font}>

<div className='servicesPageH1' data-aos ="fade-right" style={fontColor2}><h1 >Services</h1></div>

  <div className='responsive' data-aos ="fade-right" style={fontColor2} onMouseOver={()=>{
    setImager(true)
  }} onMouseLeave={()=>{
    setImager()
  }}> <h1>Responsive</h1> <div> {imager &&<img src={responsiveImage} alt="" className='responsImg'/>}</div> <h1> WebDesign</h1></div>

  <p style={fontColor2} className='textForServices text-center' data-aos="fade-down">My cutting-edge mobile web design services will change the way people see you online. I'm an expert at making dynamic websites that are easy for anyone to use and look great on all screen sizes, from phones to computers. With my help, your brand will stand out with beautiful graphics and perfect performance on all devices.</p>

  <div className='graphicsDes' data-aos ="fade-right" style={fontColor2} onMouseOver={()=>{
    setImager2(true)
  }} onMouseLeave={()=>{
    setImager2()
  }}> <h1>Graphics</h1> <div>{imager2 &&<img src={graphicsImage} alt="" className='graphicsImg'/>}</div> <h1>Design</h1> </div>

  <p style={fontColor2} className='text-center textForServices' data-aos="fade-down">Elevate your brand's visual identity with my creative graphic design services. From compelling logos to eye-catching advertising materials, I specialize in developing designs that make a lasting impact. With a keen eye for detail and a passion for creativity, I'll work closely with you to bring your idea to life.</p>

  <div className='ui' data-aos ="fade-right" style={fontColor2} onMouseOver={()=>{
    setImager3(true)
  }} onMouseLeave={()=>{
    setImager3()
  }}> <h1>UI/</h1> <div>{imager3 &&<img src={uiUx} alt="" className='uiUxImg'/>}</div> <h1>UX</h1> </div>

<p style={fontColor2} className='text-center textForServices' data-aos="fade-down">My experienced UI/UX design services can help you transform your digital platforms into intuitive and engaging experiences. I specialize in building enthralling and delightful interfaces by merging user-centric ideas with clean aesthetics. From wireframing to prototype, I methodically design every aspect to guarantee smooth navigation and excellent user engagement. </p>

  <div className='spas' data-aos ="fade-right" style={fontColor2} onMouseOver={()=>{
    setImager4(true)
  }} onMouseLeave={()=>{
    setImager4()
  }}> <h1>Single Page</h1> <div>{imager4 &&<img src={spa} alt="" className='spasImg'/>}</div> <h1>Applications</h1></div>

<p style={fontColor2} className='text-center textForServices' data-aos="fade-down">Improve your internet presence with my specialised single page application (SPA) development services. Using contemporary web technologies, I develop immersive and responsive SPA solutions that provide seamless user experiences. </p>

{/* more services */}

  <div className='spas' data-aos ="fade-right" style={fontColor2} onMouseOver={()=>{
    setImager5(true)
  }} onMouseLeave={()=>{
    setImager5()
  }}> <h1>Consultation</h1> <div> {imager5 &&<img src={consultationTraning} alt="" className='responsImg'/>}</div> <h1>&Training</h1> </div>

<p style={fontColor2} className='text-center textForServices' data-aos="fade-down">Empower your team and unlock your potential with my expert consultation and training services. Drawing from years of experience, I provide personalized guidance and hands-on training tailored to your specific needs. Whether you're looking to optimize your workflows, enhance your skills, or navigate new technologies.</p>

  <div className='graphicsDes' data-aos ="fade-right" style={fontColor2} onMouseOver={()=>{
    setImager6(true)
  }} onMouseLeave={()=>{
    setImager6()
  }}> <h1>Web </h1> <div>{imager6 &&<img src={webMaitainance} alt="" className='graphicsImg'/>}</div> <h1>Maintenance</h1> </div>

<p style={fontColor2} className='text-center textForServices' data-aos="fade-down">Keep your digital presence running smoothly with my comprehensive web maintenance services. From regular updates to troubleshooting issues, I handle all aspects of website upkeep so you can focus on your core business. With proactive monitoring and swift resolutions, I ensure your website remains secure, up-to-date, and optimized for peak performance.</p>

  <div className='ui' data-aos ="fade-right" style={fontColor2} onMouseOver={()=>{
    setImager7(true)
  }} onMouseLeave={()=>{
    setImager7()
  }}> <h1>Photo</h1> <div>{imager7 &&<img src={performanceOpt} alt="" className='uiUxImg'/>}</div> <h1>Editing</h1> </div>

<p style={fontColor2} className='text-center textForServices' data-aos="fade-down">
Elevate your visuals with my expert photo editing services. From basic retouching to advanced enhancements, I specialize in transforming ordinary images into stunning works of art. Whether you're a professional photographer or a business looking to enhance your brand's imagery, I offer precise attention to detail.
</p>


  <div className='graphicsDes' data-aos ="fade-right" style={fontColor2} onMouseOver={()=>{
    setImager8(true)
  }} onMouseLeave={()=>{
    setImager8()
  }}> <h1>Website </h1> <div>{imager8 &&<img src={webResign} alt="" className='spasImg'/>}</div> <h1>Redesign </h1></div>

<p style={fontColor2} className='text-center textForServices' data-aos="fade-down">
Refresh your online brand identity with my experienced website redesign services. I revive your digital presence by utilizing cutting-edge design trends and user experience insights. From new designs to straightforward navigation, I reinvent every area of your website to attract your audience and increase significant engagement. 
</p>

  <div className='viewmoreFlexer2'>

<Link to="/Services" className='viewMore3' style={bgColor2} ><span style={font}>Contact Me</span></Link>

</div>

</div>

<div className='strecher'></div>

<div className='copyright' style={font}><p style={fontColor2}> Copyright © 2024 General Dave</p></div>


    </>
  )
}

export default Services